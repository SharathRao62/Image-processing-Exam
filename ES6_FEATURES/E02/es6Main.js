import  Person  from "./es6Classes";

let p = new Person('Sharath', 'Rao');
console.log(p);

p.greetPerson();
p.getFullName();
Person.staticMethod();// calling static method
