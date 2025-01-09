import './App.css';
import Expenses from './components/Expenses/Expenses';  
import NewExpense from './components/NewExpense/NewExpense'



const App = () => {
  const expenses = [
    {
      date: new Date(2024, 10, 22),
      title: 'New Book',
      price: 39.99
    },
    {
      date: new Date(2024, 10, 22),
      title: 'New Bag',
      price: 99.99
    }
  ];  
 
  const addExpenseHandler = (expense) => {
    console.log('In App.js')
    console.log(expense)
  } 
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} /> 
    </div>
  );
}

export default App;
