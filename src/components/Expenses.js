import ExpenseItem from "./ExpenseItem"
import Card from "./Card"
import './Expenses.css'

const Expenses = (props) => {
    return (
        <Card className="expenses">
            <ExpenseItem data={props.expenses[0]} />
            <ExpenseItem data={props.expenses[1]} /> {/* Muutsin teise elemendi indeksit */}
        </Card>
    )
} 
export default Expenses