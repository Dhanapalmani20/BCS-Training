console.log(a);
var a = 10;

//copiled - compiler -human code -> 1's 0's(file)

//js -> JIT -> compilaction

//Compilaction phase
console.log(a); //skip
var a = 10; // JS guy -do you a? no. note a (context)- undefined
console.log(a); // skip

//Execution phase
console.log(a); //Do you know a? yes. then give me value - undefined
var a = 10; // Do you know a? yes. Assign a is 10 (Context)
console.log(a); //Do you know a? yes. then give me value -10.
