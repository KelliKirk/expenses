import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import ExpenseDate from './components/ExpenseDate';

function App() { 
  const data = {
    date: new Date(2024, 10, 22),
    title: 'New Book',
    price: 39.99
  } 
  const expenses = {
    date: new Date(2024, 10, 22),
    title: 'New Book',
    price: 39.99
  } 
  
  return (
    <div className="App">
      <ExpenseItem  data ={expenses[0]}   />

<ExpenseItem data = {expenses[1]} />
    
    </div>
  );
}

export default App;
