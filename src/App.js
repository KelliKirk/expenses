import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import ExpenseDate from './components/ExpenseDate';

function App() {
  return (
    <div className="App">
      <ExpenseItem />
      <ExpenseDate />
      <ExpenseItem />
      <ExpenseDate />
    </div>
  );
}

export default App;
