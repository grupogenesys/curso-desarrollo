/**
 * Ejercicios de ES6
 * https://github.com/grupogenesys/curso-desarrollo
 */

  let myVar = '';

  const fn = (params) => {
    // TODO: Actions
  }


 class Person {

  constructor(name = '') {
    this.name = name
    this.email = ''
    this.phone = ''
    this.birthDay = ''
    this.kmRuned = 1
  }

  run() {
    return "I am running...";
  }

  static speak() {
    return "I am speaking...";
  }

 }

 const person = new Person('Juan');


 class Teacher extends Person {
  
  constructor() {
    super('Jaime')
    this.job = 'Teach'
  }

  read() {
    return 'I am reading ...';
  }

 }
 
 const teacher = new Teacher()

 console.log(teacher.name);
 console.log(Teacher.speak());
