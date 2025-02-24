// *********************** Example 1 - Hoisting ***********************

// // function greetPerson(name) {
//     let greet;
//     if (name === 'Sharath') {
//         greet = 'Hello ' + name
//     } else {
//         greet = 'Hi There!';
//     }
//     console.log(greet);
// }
// greetPerson('Sharath');


// *********************** Example 2 - Scopes ***********************
// var a = 1;
// var b = 2;

// if (a === 1) {
//     var a = 10;
//     let b = 20;
//     console.log(a);
//     console.log(b);
// }

// console.log(a);
// console.log(b);

// *********************** Example 3 Declare  ***********************

// var c = 1;
// var c = 2; //var cannot be declared


// let d = 1;
// let d = 2;// let cannot be declared


// *********************** Example 4 - For loop ***********************

for (let i = 1; i <= 5; i++) {
    setTimeout(
        function () {
            console.log(i);
        },
        1000
    )
}