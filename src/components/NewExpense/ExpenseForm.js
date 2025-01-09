import './ExpenseForm.css'
import './NewExpense.css'

const ExpenseForm = (props) => {
return (
    <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
            <label>Title</label>
            <input type="text"/></div>
        <div className="new-expense__control">
            <label>Price</label>
            <input type="number" min="0.01" step="0.01"/>
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2025-01-09" step="2026-01-31"/>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
        </div>
    </form>
)
} 

export default ExpenseForm