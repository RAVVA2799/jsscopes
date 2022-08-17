var carName = "Volvo";
myFunction();

function myFunction() {
  
    console.log("i can display"+""+ carName);      // global scope

}


//local scope-----function scope

nyFunction();

function nyFunction() {
  var carName = "Volvo";
  console.log(typeof carName + " " + carName);
}
console.log(typeof carName);


// block scope

{
    var p = 110;               // both variables defined within a block
    const q = 111;



console.log(p); //          // called the variables inside the function only
console.log(q); // 
}
 




