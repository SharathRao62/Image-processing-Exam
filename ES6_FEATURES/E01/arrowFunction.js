
hello = () => 'hello world!'
console.log(hello());

let getRegularValue = function () {
    return 10;
}
console.log(getRegularValue());


getRegularValue = () => 10;
console.log(getRegularValue());


//Example 2 

getArrowValue2 = (m, bonus) => 10 * m + bonus;
console.log(getArrowValue2(5, 50));


// this keyword Example 3
var employee = {
    id: 1,
    greet: function () {
        let self = this;
        setTimeout(function () {
            console.log(self.id)
        }, 1000);
    }
}

var employee = {
    id: 1,
    id: 12,
    greet: function () {
        // let self = this;
        setTimeout(() =>{
            console.log(this.id)
        }, 1000);
    }
}

employee.greet();