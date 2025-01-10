import './App.css';
import Expenses from './components/Expenses/Expenses';  
import NewExpense from './components/NewExpense/NewExpense'
import { useState, useEffect } from 'react'



const App = () => {

  const DYMMY_EXPENSES = [
    {
      id: 'id0',
      date: new Date(2024, 10, 22),
      title: 'New Book',
      amount: parseFloat(19.20) // parseFloat teeb stringist komakohaga arvu
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
 
  const [expenses, setExpenses] = useState(() => {
    const expensesFromLS = JSON.parse(localStorage.getItem('expenses'))
    return expensesFromLS ? expensesFromLS.map(expense => ({
      ...expense,
      date: new Date(expense.date) // Veendume, et date on kuupäeva objekt
    })) : []
  })
  

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  },[expenses])

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses] 
    } )

    console.log('In App.js')
    console.log(expense)
    setExpenses([expense, ...expenses])
  } 

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses} /> 
    </div>
  );
}

export default App;
