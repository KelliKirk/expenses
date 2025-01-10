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
        
        setSelectedYear(selectedYear);
    }
    
    console.log('Year data in Expenses.js:', selectedYear)

    // Filtreerimine
    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === selectedYear;
    })
    console.log('Filtered expenses:', filteredExpenses)

        filteredExpenses.map((expense) => {
            console.log(expense)
        } ) // map funktsioon loob uue massiivi algset massiivi muutmata ning tagastab täpselt sama pika massiivi kui sisend
    return (
            <Card className="expenses"> 
                <ExpensesFilter selected={selectedYear}
                onChangeFilter={filterChangeHandler}
                />  
               {
                filteredExpenses.map((expense) => {
                    return <ExpenseItem data={expense} key={expense.id} /> 
                } ) // iga massiivi elemendiga peab kuvama ExpenseItem komponendi ja tagastama tulemuse põhiprogrammile
               } 
            </Card>
    )
} 

export default Expenses