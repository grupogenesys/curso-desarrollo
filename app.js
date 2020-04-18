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

app.listen(port, () => {
  console.log(`Servidor funcionando en localhost: ${port}`)
});