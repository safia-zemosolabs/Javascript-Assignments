/*
 *
 * Part - A : Refactor the following function into a one-liner
 * 
 */
console.log("\nPart - A : Problem");

var printName_old = (name) => {

    return "Hi " + name;
}
console.log(printName_old("Lavanya"));  

console.log("\nPart A : Solution");

var printName_new = name => "Hi " + name;

console.log(printName_new("Lavanya"));



/*
 *
 * Part - B : Rewrite the following code using template literals
 * 
 */
console.log("\nPart - B : Problem");

var printBill_old = (name, bill) => {

    return "Hi " + name + ", please pay: " + bill;
}
console.log(printBill_old("Lakshmi",500));

console.log("\nPart B : Solution");

var printBill_new = (name, bill) => {

    return `Hi ${name}, please pay: ${bill}`;
}
console.log(printBill_new("Lakshmi",500)); 

/*
 *
 * Part - C : Modify the following code such that the object properties 
 *            are destructured and logged.
 * 
 */
console.log("\nPart - C : Problem");

const person = {

    name: "Noam Chomsky",
    age: 92
};

let name = person.name;
let age = person.age;
console.log(name);
console.log(age);

console.log("\nPart C : Solution");

const person_new = {

    pName: "Noam Chomsky",
    pAge: 92
};

const {pName, pAge} = person_new;
console.log(pName);
console.log(pAge);

