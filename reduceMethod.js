/*this method reduces an entire array to a single value , it takes 2 parameters out of whhich
* first param is called as the accumilator
* and second is the current element of array under the loop
* */

let numbers = [1,2,3,4,5];
let total = numbers.reduce((accumilator,num)=>{
    return accumilator+num;
})

console.log(total);