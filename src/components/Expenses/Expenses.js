import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card"
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import { useState } from 'react'


const Expenses = (props) => {
    // useState filtreerimisaasta jaoks
    const [filteredYear, setFilteredYear] = useState('2024')

    // filtri muutuse handler
    const filterChangeHandler = (filteredYear) => {
        
        setFilteredYear(filteredYear);
    }
    
    console.log('Year data in Expenses.js:', filteredYear)

    // Filtreerimine
    const filteredExpenses = props.expenses.filter(expense => {
        return new Date(expense.date).getFullYear().toString() === filteredYear;
    })

    console.log('Filtered expenses:', filteredExpenses)

        filteredExpenses.map((expense) => {
            console.log(expense)
        } ) // map funktsioon loob uue massiivi algset massiivi muutmata ning tagastab täpselt sama pika massiivi kui sisend
    return (
            <Card className="expenses"> 
                <ExpensesFilter filtered={filteredYear}
                onChangeFilter={filterChangeHandler}
                />  

               {
               filteredExpenses.length === 0 && <p className="expenses-list__fallback">No expenses found.</p>
               } 

               {
                filteredExpenses.length > 0 && filteredExpenses.map((expense) => {
                    return <ExpenseItem data={expense} key={expense.id} /> 
                } ) // iga massiivi elemendiga peab kuvama ExpenseItem komponendi ja tagastama tulemuse põhiprogrammile
               } 
            </Card>
    )
} 

export default Expenses