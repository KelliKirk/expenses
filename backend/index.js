import express from 'express'
import fs from 'node:fs/promises'

const app = express()


// Middleware (app.use(...)) seadistab päised CORS-iks (Cross-Origin Resource Sharing), et päringud oleks lubatud ka teistelt domeenidelt.
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    next()
} )

app.get('/expenses', async(req, res) => {
    const fileContent = await fs.readFile('./data/expenses.json')
    const expensesData = JSON.parse(fileContent)
    res.status(200).json({expenses: expensesData} ) // andmete saatmine kliendile
} ) 

app.listen(3005, () => {
    console.log('backend server connected')
} )