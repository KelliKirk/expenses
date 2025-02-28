import './App.css';
import Expenses from './components/Expenses/Expenses';  
import NewExpense from './components/NewExpense/NewExpense';
import { useState, useEffect } from 'react';
import Error from './components/UI/Error';

const App = () => {
  const DYMMY_EXPENSES = [ 
    {
      id: 'id0',
      date: new Date(2024, 10, 22),
      title: 'New Book',
      amount: parseFloat(19.20)
    },
    {
      id: 'id1',
      date: new Date(2025, 0, 3),
      title: 'New Bag',
      amount: parseFloat(99.99)
    },
    {
      id: 'id2',
      date: new Date(2024, 10, 22),
      title: 'New Jeans',
      amount: parseFloat(50.00)
    },
    {
      id: 'id3',
      date: new Date(2025, 0, 9),
      title: 'New Coat',
      amount: parseFloat(92.99)
    },
  ];  
  
  const [isFetching, setIsFetching] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [error, setError] = useState(null);
  const [showError, setShowError] = useState(false);
  const [expenses, setExpenses] = useState(() => {
    const expensesFromLS = JSON.parse(localStorage.getItem('expenses'));
    // Kontrollime, kas expensesFromLS on olemas
    return expensesFromLS ? expensesFromLS.map(expense => ({
      ...expense, // see rida muudab iga kulutuse objekti
      date: new Date(expense.date) // Veendume, et date on kuupäeva objekt
    })) : [];
  });
  
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => { 
    const getExpenses = async () => {
      setIsFetching(true);
      try {  
        const response = await fetch('http://localhost:3005/expenses');
        if (!response.ok) {
          throw new Error('Failed fetching data.');
        } 
        const responseData = await response.json();
        setExpenses(responseData.expenses);
      } catch (error) {
        setError({
          title: 'An error occurred!',
          message: 'Failed fetching expenses data, please try again later.'
        });
        setShowError(true);
      } finally {
        setIsFetching(false);
      }
    };
    
    getExpenses();
  }, []); 

  const addExpenseHandler = async (expense) => {
    setIsAdding(true);
    try {
      const response = await fetch('http://localhost:3005/expenses', {
        method: 'POST',
        body: JSON.stringify(expense),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to add expense.');
      }
      
      const responseData = await response.json();
      
      // Kui serverilt tuleb uus kulu ID-ga, siis kasutame seda
      const newExpense = responseData.expense || {
        ...expense,
        id: Math.random().toString() // Genereerime ID juhul kui server ei tagasta
      };
      
      setExpenses((previousExpenses) => {
        return [newExpense, ...previousExpenses];
      });
      
      console.log('In App.js');
      console.log(newExpense);
    } catch (error) {
      setError({
        title: 'Adding expense failed!',
        message: 'Failed to add expense data, please try again later.'
      });
      setShowError(true);
    } finally {
      setIsAdding(false);
    }
  };
  
  return (
    <div className="App">
      {showError && <Error 
        title={error?.title} 
        message={error?.message} 
        onConfirm={() => setShowError(false)}
      />}
      <NewExpense 
        onAddExpense={addExpenseHandler} 
        isAdding={isAdding}
      />
      <Expenses 
        expenses={expenses}
        isLoading={isFetching} 
      /> 
    </div>
  );
};

export default App;