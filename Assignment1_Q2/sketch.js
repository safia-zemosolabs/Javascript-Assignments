concateFirstLetter = (firstName, lastName) => firstName.slice(0,1) + lastName.slice(0,1);
console.log(concateFirstLetter("Roger","Waters"));   

concateFirstLetter2 = firstName => firstName.slice(0,1);
console.log(concateFirstLetter2("Roger"));   
