 const arr=["hello",1,2,3,]
const[ First, second ,third]=arr;
 console.log(First,second,third);

const obj={
    employeeID : 1,
    employeesalary: 1000,
    employee:"sravan",
    address: "karimnagar",
};
const{employeeID,employeesalary,employee,address}=obj;
console.log(employeeID,employeesalary,employee,address);
const arr2 = ["Hello", 2, 3, 4, 5];

const [firstString,secondValue, ...remaining] = arr2;

console.log(remaining);


function displayNames(...a){
    console.log(`The names are: ${a}`)
}

displayNames("Ram charan", "Prabhas", "Jr.NTR", "Mahesh babu")


const arr3 = ["a", "b", "c"];
const dummy = ["orange", "apple"]
const arr4 = [...arr3,...dummy];
arr3.push("d");
 
// Spread in objects
const car1 = {name:"bmw", price:"1 cr"};
const car2 = {color:"white", engineCC: 5000}
const car = {...car1, ...car2};
// console.log(car);


// Callbacks
// A function passed as an argument to another function 
function square(val){
    return val*val
}
function cube(val){
    return val*val*val
}

function sumofSquares(val1,val2){
    let firstValue = square(val1);
    let secondValue = square(val2); 
    return firstValue + secondValue
}
function sumofCubes(val1,val2){
    let firstValue = cube(val1);
     let secondValue = cube(val2); 
   return firstValue + secondValue
 }

function sumOfSomething(val1,val2,callbackFn){
    let firstValue = callbackFn(val1);
    let secondValue = callbackFn(val2); 
    return firstValue + secondValue
}

const ans = sumOfSomething(2,3,cube)
 console.log(ans);

setInterval(()=>console.log("sravan"), 100)