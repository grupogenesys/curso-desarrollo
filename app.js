const express = require('express')
const bodyParser = require('body-parser')

const port = 3001
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ extended: true }))

app.get('/', (req, res) => {
  res.json({ message: 'Hola mundo '})
})

const DB = require('./db/db')
const userDB = new DB('USERS')

app.get('/users/:id', async (req, res) => {
  try {
    const { params: { id }} = req
    const [users] = await userDB.getOne(id)
    res.json({ users })
  } catch(error) {
    res.json({ error })
  }
})

app.get('/users', async (req, res) => {
  try {
    const users = await userDB.getAll()
    res.json({ users })
  } catch(error) {
    res.json({ error })
  }
})

app.post('/users', async (req, res) => {
  try {
    const data = req.body
    const response = await userDB.create(data)
    res.json({ status: 'ok', response })
  } catch(error) {
    res.json({ status: 'error', error })
  }
})

app.put('/users/:id', async (req, res) => {
  try {
    const { body: data } = req
    const { params: { id }} = req
    const response = await userDB.update(data, id)
    res.json({ status: 'ok', response })
  } catch (error) {
    res.json({ status: 'error', error })
  }
})

app.delete('/users/:id', async (req, res) => {
  try {
    const { params: { id }} = req
    const response = await userDB.destroy(id)
    res.json({ status: 'ok', response })
  } catch(error) {
    res.json({ status: 'error', error })
  }
})


app.listen(port, () => {
  console.log(`Servidor funcionando en localhost: ${port}`)
});