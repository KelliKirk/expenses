import './App.css';
import Expenses from './components/Expenses/Expenses';  

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

  return (
    <div className="App">
      <Expenses expenses={expenses} /> 
    </div>
  );
}

export default App;
