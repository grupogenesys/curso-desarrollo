const express = require('express')
const bodyParser = require('body-parser')

const port = 3001
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ extended: true }))

app.get('/', (req, res) => {
  res.json({ message: 'Hola mundo '})
})

app.get('/users', async (req, res) => {
  try {
    const { getUsers } = require('./db/models/users')
    const users = await getUsers()
    res.json({ users })
  } catch(error) {
    res.json({ error })
  }
})

app.post('/users', (req, res) => {
  const data = req.body
  const { createUser } = require('./db/models/users')
  createUser(data)
    .then( response => {
      res.json({ status: 'ok', response })
    })
    .catch(error => {
      res.json({ status: 'error', error })
    })
})

app.put('/users/:id', async (req, res) => {
  try {
    const { body: user } = req
    const { params: { id }} = req
    const { updateUser } = require('./db/models/users')
    const response = await updateUser(user, id)
    res.json({ status: 'ok', response })
  } catch (error) {
    res.json({ status: 'error', error })
  }
})




app.listen(port, () => {
  console.log(`Servidor funcionando en localhost: ${port}`)
});