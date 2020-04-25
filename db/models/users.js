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

const getUser = (id) => {
  return new Promise((resolve, reject) => {
    try {
      pool.getConnection((error, connection) => {
        if (error) {
          reject(error)
        }

        if (!connection) {
          reject({message: "Error de conexión con base de datos"})
        } else {
          connection.query('SELECT * FROM USERS WHERE id=?;', id , (error, results) => {
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

const createUser = (user) => {
  return new Promise((resolve, reject) => {
    try {
      pool.getConnection((error, connection) => {
        if (error) {
          reject(error)
        }

        if (!connection) {
          reject({message: "Error de conexión con base de datos"})
        } else {
          Object.assign(user, { created_at: new Date() })
          connection.query('INSERT INTO USERS SET ?', user, (error, results) => {
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

const updateUser = (user, id) => {
  return new Promise((resolve, reject) => {
    try {
      pool.getConnection((error, connection) => {
        if (error) {
          reject(error)
        }

        if (!connection) {
          reject({message: "Error de conexión con base de datos"})
        } else {
          Object.assign(user, { updated_at: new Date() })
          connection.query('UPDATE ?? SET ? WHERE id = ?', ['USERS', user, id], (error, results) => {
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

const deleteUser = (id) => {
  return new Promise((resolve, reject) => {
    try {
      pool.getConnection((error, connection) => {
        if (error) {
          reject(error)
        }

        if (!connection) {
          reject({message: "Error de conexión con base de datos"})
        } else {
          connection.query('DELETE FROM USERS WHERE id = ? ', id, (error, results) => {
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

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
}