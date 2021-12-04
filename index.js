const express = require('express')
const connectDB = require('./database/connect')
const TodoRouter = require('./routes/todoRoutes')

const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/api/todo', TodoRouter)

app.get('/', (req, res) => res.send('This is home page'))

const start = async () => {
    try {
        await connectDB('mongodb://127.0.0.1:27017/crud_express')
        app.listen(5000, console.log('server is running at port http://localhost:5000'))
    } catch (error) {
        console.log({msg: 'Error while connecting to database', error})
    }
}
start()