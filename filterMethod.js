// filters an array by removing the elements that donot satisfy a particular condition

let numbers = [1,2,3,4,5,6];

let evenNumbers = numbers.filter((num)=>{
    return (num%2 === 0);
})

console.log(evenNumbers);