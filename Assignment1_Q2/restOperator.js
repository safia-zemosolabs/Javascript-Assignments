var colors = ["Violet", "Indigo", "Blue", "Green", "Yellow"];  
      
// destructuring assignment  
var [a,b,...args] = colors;  

var moreColors = ["Black", "White", ...colors];

console.log(a);   
console.log(b);   
console.log(args);  
console.log(moreColors);