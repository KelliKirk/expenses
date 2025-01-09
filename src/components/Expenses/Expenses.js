import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card"
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import { useState } from 'react'


const Expenses = (props) => {
    // useState filtreerimisaasta jaoks
    const [selectedYear, setSelectedYear] = useState('2024')

    // filtri muutuse handler
    const filterChangeHandler = (selectedYear) => {
        console.log('Year data in Expenses.js:', selectedYear);
        setSelectedYear(selectedYear);
    }

    return (
            <Card className="expenses"> 
                <ExpensesFilter selected={selectedYear}
                onChangeFilter={filterChangeHandler}
                />  
                <ExpenseItem data={props.expenses[0]} />
                <ExpenseItem data={props.expenses[1]} />
            </Card>
    )
} 

export default Expenses