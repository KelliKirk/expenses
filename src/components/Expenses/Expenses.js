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
        props.expenses.map((expense) => {
            console.log(expense)
        } ) // map funktsioon loob uue massiivi algset massiivi muutmata ning tagastab täpselt sama pika massiivi kui sisend
    return (
            <Card className="expenses"> 
                <ExpensesFilter selected={selectedYear}
                onChangeFilter={filterChangeHandler}
                />  
               {
                props.expenses.map((expense) => {
                    return <ExpenseItem data={expense} /> 
                } ) // iga massiivi elemendiga peab kuvama ExpenseItem komponendi ja tagastama tulemuse põhiprogrammile
               } 
                <ExpenseItem data={props.expenses[0]} />
                <ExpenseItem data={props.expenses[1]} />
            </Card>
    )
} 

export default Expenses