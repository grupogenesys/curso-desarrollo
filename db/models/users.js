const pool = require('../pool')
const getUsers = () => {
  return new Promise((resolve, reject) => {
    try {
      pool.getConnection((error, connection) => {
        if (error) {
          reject(error)
        }

        if (!connection) {
          reject({message: "Error de conexión con base de datos"})
        } else {
          connection.query('SELECT * FROM USERS;', (error, results) => {
            if (error) {
              reject(error)
            }
            connection.release()
            resolve(results)
          })
        }
      })
    } catch( e ) {
      reject(e)
    }
  })
}

const createUsers = () => {

}

const updateUsers = () => {

}

const deleteUsers = () => {

}

module.exports = {
  getUsers,
  createUsers,
  updateUsers,
  deleteUsers
}