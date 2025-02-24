//*************************** Array Destructuring ***************************

// let employee = ['Sharath', 'Rao', 'K'];
// let [firstName, middleName, lastName] = employee;
// console.log(`${firstName} ${middleName} ${lastName}`);


// let employee2 = ['Sharath', 'Rao', 'K'];
// let [, , lastName1] = employee2;
// console.log(` ${lastName1}`);


// let employee3 = ['Sharath', 'Rao', 'K', 'He is a Funny BOY'];
// let [firstName, ...elements] = employee3;
// console.log(firstName);
// console.log(elements);

//*************************** Object Destructuring ***************************


let employee4 = {
    fname: "Sharath",
    lname: 'Rao',
    gender: 'Male'
}

let { fname: f, lname: l, gender: g } = employee4

console.log(`${f} ${l} ${g}`);
