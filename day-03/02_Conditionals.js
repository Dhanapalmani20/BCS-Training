var isRaining = false;

//condition(true --> if)(false --> else)
if(isRaining == true){
    //false == true
    console.log("wear");
    console.log()
}else{
    console.log("wear");
}
// == , === Doesnt matter if both data types same

// Task - Plan to go to party
// noOfPersons 2 or below -> 🛵
// noOfPersons 4 or above -> 🚘



var isRaining = false;
var issunny =true;
//condition(true --> if)(false --> else)
if(isRaining == true){
    //false == true
    console.log("wear");
}else if (issunny == true){
console.log("wear");}
else{
    console.log("wear");
}


// Task - Plan to go to party
// noOfPersons 2 or below -> 🛵
// noOfPersons 3 - 4 -> 🚘
// noOfPersons above 4  -> 🚌

var noOfPersons = 4;

// else needs if... But not the other way around
if (noOfPersons <= 2) {
  console.log("Lets take 🛵");
} else if(noOfPersons == 3){
  console.log("Lets take 🚘");
}else {
  console.log("lets take =🚌");}



  // Clue: if & else - only once - else if - n times
// Task 1.3 - Plan to go to party
// noOfPersons 2 or below -> 🛵
// noOfPersons 3 -> 🛺
// noOfPersons 4 - 5 -> 🚘
// noOfPersons 6 or above -> 🚌

if (noOfPersons <= 2) {
  console.log("Lets take 🛵");
} else if(noOfPersons == 3){
  console.log("Lets take 🚘");
}else if (noOfPersons >=4 && noOfPersons >=5){
  console.log("lets take=🚘");
}
else
{    
  console.log("lets take =🚌");
}

//var celsius=prompt("Enter then tempt");
//var far = (celsius * 9/5) + 32;
//console.log("The temperture in" + celsius+"°C is"+far+"°F");


var celsius = prompt("Enter then tempt");
var far = (celsius * 9/5) + 32;
console.log(`The temperature in ${celsius}°C is ${far}°F`);

// Find area of circle given radius
// PI = 3.14
// Enter the radius in cm: 2

var radius = prompt("Enter the value");
var PI = 3.14;
var area = PI * radius * radius;
console.log("The area of given"+radius + "cm radius is"+ area +"cm²");

//person1: Muthu, height: 186
//person2: Abishek, height: 165
//Output: Muthu is taller than Abishek by 21cm

var unname = prompt("Enter your name");
console.log(unname);
var unheight = prompt(`Enter ${unname} your heigth`);
console.log(unheight);

var seacname = prompt("Enter your name");
console.log(seacname);
var unheight = prompt(`Enter ${seacname} your heigth`);
console.log(unheight);

console.log(`$(unname) is taller than $(seacname)`);

