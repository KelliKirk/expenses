// App.js
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() { 
  // Defineeri expenses kui massiiv
  const expenses = [
    {
      date: new Date(2024, 10, 22),
      title: 'New Book',
      price: 39.99
    },
    {
      date: new Date(2024, 10, 23),
      title: 'Another Book',
      price: 29.99
    }
  ]; 
  
  return (
    <div className="App">
      <ExpenseItem 
        date={expenses[0].date}
        title={expenses[0].title}
        price={expenses[0].price}
      />
      
      <ExpenseItem 
        date={expenses[1].date}
        title={expenses[1].title}
        price={expenses[1].price}
      />
    </div>
  );
}

export default App;
     
      

    
