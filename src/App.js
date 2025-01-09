import './App.css';
import Expenses from './components/Expenses/Expenses';  
import NewExpense from './components/NewExpense/NewExpense'



const App = () => {
  const DYMMY_EXPENSES = [
    {
      date: new Date(2024, 10, 22),
      title: 'New Book',
      amount: 39.99
    },
    {
      date: new Date(2024, 10, 22),
      title: 'New Bag',
      amount: 99.99
    }
  ];  
 
  const addExpenseHandler = (expense) => {
    console.log('In App.js')
    console.log(expense)
  } 
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={DYMMY_EXPENSES} /> 
    </div>
  );
}

export default App;
