//var fullname = "Hari ram";

//console.log(fullname.toUpperCase());
 //var fullname ="HARI RAM ";
//console.log(fullname.toLowerCase());
 

var fullname = " DO GOOD,DE GOOD";
console.log(fullname.trim() .toLowerCase());

var stock1 = "vanilla";
var stock2 = "chocolate";
var stock3 = "butterscotch";
var stock4 = "cotton candy";

// Task 3.1 - TextCase - Dont consider
// Output
// Case 1
// Please enter your fav 🍧?: vanilla
// Yes, we have vanilla in stock
var ice = prompt("Please enter your fav 🍧?");
if(ice ==stock1){
console.log("Yes, we have vanilla in stock");
}else if (ice ==stock2){
    console.log("Yes, we have chocolate in stock");
}else if (ice ==stock3){
    console.log("Yes, we have butterscotch in stock");
}else if (ice ==stock4){
    console.log("Yes, we have cotton candy in stock");
}
else {
    console.log(`sorry out of stock ${ice}`);
}

if(ice== stock1||stock2||stock3||stock4){
    console.log(`Yes, we have ${ice} stock`);
}else{
    console.log(`sorry out of stock ${ice}`);
}
// Case 2
// Please enter your fav 🍧?: strawberry
// We ran out of strawberry
// Task 3.2 -  - TextCase -  Consider it
// Output
// Case 1
// Please enter your fav 🍧?:   VAnilla
// Yes, we have vanilla in stock
var getuser= prompt("enter your fav 🍧?");
console.log=(getuser)||(  VAnilla);
console.log =getuser.trim().toUpperCase();
if(ice== stock1||stock2||stock3||stock4){
    console.log(`Yes, we have ${ice} in stock`);
}


// Case 2
// Please enter your fav 🍧?:     stRawberry
// We ran out of strawberry
