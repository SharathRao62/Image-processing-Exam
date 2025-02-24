add = (a = 10, b = 30, c = 6) => a + b + c;
// console.log(add(20));


let percentBonus = () => 0.1;
let getValue = function (value = 10, bonus = value * percentBonus()) {
    console.log(value + bonus);
    console.log(arguments.length);
}

getValue();
getValue(20);
getValue(20, 30);
// getValue(undefined, 30);

// bonus = value * percentBonus
// console.log(bonus);
