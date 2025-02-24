export class Person {
    firstName;
    lastName;

    constructor(firstName = '', lastName = '') {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greetPerson(){
        console.log(`Good Morning',${this.firstName}`);
    }
    getFullName(){
        console.log(`Name :',${this.firstName} ,${this.lastName}`);
   
    }

    static staticMethod(){
        console.log('static Method');
        
    }
}
let p = new Person('Sharath', 'Rao');
console.log(p);

p.greetPerson();
p.getFullName();
Person.staticMethod();// calling static method


module.exports = {Person};
