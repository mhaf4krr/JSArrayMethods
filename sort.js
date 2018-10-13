/* sorting an array using sort method it takes a callback function as an argument as shown*/

let numbers = [1,10,2,9,8,7,5,0];

let sortedNumbers = numbers.sort((num1,num2)=>{
    if(num1>num2)
        return 1;
    if(num1<num2)
        return -1;
    else return 0;
})

console.log(sortedNumbers);