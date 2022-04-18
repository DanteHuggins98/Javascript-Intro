//VERY HARD: Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /) and another number, and then uses the functions created in the hard challenge to output the value in sentence form. Example output: "3 + 4 = 7"


let n1 = Number(prompt(`Please enter a number `));
console.log(n1)

let operator = prompt(`Please enter operator (either +, -, *, and /):`);
let n2 = Number(prompt(`Please enter another number `));



if(operator == `+`){
   let result = n1 + n2

   console.log(`${n1} ${operator} ${n2} = ${result}`);
}

else if (operator == '-') {
   let result = n1 - n2;

   console.log(`${n1} ${operator} ${n2} = ${result}`);

}
else if (operator == '*') {
    result = n1 * n2;
    
    console.log(`${n1} ${operator} ${n2} = ${result}`);
}
else {
    result = n1 / n2;
    console.log(`${n1} ${operator} ${n2} = ${result}`);

}

