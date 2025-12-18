var num= 10;
var num= 80;//latest one win

console.log(num);

const  t1=[100,100];
const t2=t1;
const t3=[100,200];
 
console.log(t1 == t2);
console.log(t1 == t3);

//spread
const y1 =[200,300];
const y2 = [800,900];
const y3 = [1000, ...y1,9000, ...y2];

console.log(y3);
const book={
    name: "Harry Potter II: Chamber of Secrets",
    author: "J.K Rowling",
};
const details= {
   year: 2002,
   Price: 1200, 
    };
    const fullDetails= {...book,...details};
    
   console.log(fullDetails);



const details1 = {
  authorAge: 55,
  year: 2002,
  price: 1200,
};

const book1 = {
  name: "Harry Potter II: Chamber of Secrets",
  author: "J.K Rowling",
  authorAge: 45,
};
//const fullDetails ={...book1,...details1};

console.log(fullDetails);

// Objects
// 1. No duplicate keys are allowed
// 2. Last key overrides (preference)

// Your Code (Merge both book & details)  authorAge: 55
// Super cool
// const fullDetails1 = { ...details1, ...book1 }; // authorAge: 45
const fullDetails1 = { ...book1, ...details1 };



const defaultDetails = {
  name: "N/A",
  author: "N/A",
  authorAge: null,
};

const book2 = {
  name: "Harry Potter II: Chamber of Secrets",
  authorAge: 45,
};

// Always give defaultDetails (first)
console.log({ ...defaultDetails, ...book2 });
// console.log({ ...book2, ...defaultDetails });

