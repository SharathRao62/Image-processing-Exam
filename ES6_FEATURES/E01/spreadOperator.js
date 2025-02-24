
let displayColors = function (message, ...colors) {
    console.log(message);
    for (let i in colors) {
        console.log(colors[i]);
    }
}
let message = 'List of colors';
let colorArray = ['Orange', 'White', 'Yellow', 'Pink']
displayColors(message, 'Red');
displayColors(message, 'Red', 'Blue');
displayColors(message, 'Red', 'Blue', 'Green');

//Example 1 of Spread Operator
displayColors(message, ...colorArray);


//Example 2 of Spread Operator
let str = "Sharath Rao"
let charStr = { ...str }
console.log(charStr);

//Example 3 of Spread Operator

let obj = [
    {
        name: "Sharath",
        address: "Sullia",
        company: "Mphasis"
    },
    {
        name: "Rao",
        address: "Mangalore",
        company: "Mphasis"
    },
    {
        name: "Sharath",
        address: "Sullia",
        company: "Mphasis"
    }
]

let arr = { ...obj };
console.log(arr);
