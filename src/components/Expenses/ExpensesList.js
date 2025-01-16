import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'

const ExpensesList = (props) => {
    if (props.isLoading) => {
        return <p className="expenses-list__fallback">
            <b>Fetching expenses data...</b>
        </p>
    } 
} 