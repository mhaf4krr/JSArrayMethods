/*some method : */

let numbers = [1,2,3,4,5,56];

let someGreaterThan50 = (list) =>{
   return list.some((item)=>{return item > 100})
}

console.log(someGreaterThan50(numbers))