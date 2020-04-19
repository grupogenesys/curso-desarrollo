/**
 * @name DB
 * @type class
 * @description Clase encargada de realizar las tareas del CRUD en la base de datos
 * @author Jaime Castrillón <jaimecastrillon@gmail.com>
*/

const execute = require('./excecute')

class DB {

  async static getOne () {
    return await execute()
  }

  async static getAll () {
    return await execute()
  }

  async static create() {
    return await execute()
  }

  async static update() {
    return await execute()
  }

  async static destroy() {
    return await execute()
  }

  async static query() {
    return await execute()
  }
}

module.exports = DB