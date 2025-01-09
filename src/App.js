import './App.css';
import Expenses from './components/Expenses/Expenses';  
import NewExpense from './components/NewExpense/NewExpense'
import { useState } from 'react'



const App = () => {

  const DYMMY_EXPENSES = [
    {
      id: 'id1',
      date: new Date(2024, 10, 22),
      title: 'New Book',
      amount: parseFloat(19.20) // parseFloat teeb stringist komakohaga arvu
    },
    {
      id: 'id2',
      date: new Date(2024, 10, 22),
      title: 'New Bag',
      amount: parseFloat(99.99)
    },
    {
      id: 'id3',
      date: new Date(2024, 10, 22),
      title: 'New Jeans',
      amount: parseFloat(50.00)
    },
  ];  
 
  const [expenses, setExpenses] = useState(DYMMY_EXPENSES)

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
