// findIndex Method searches through an array if element satisfies search criteria then the index is returned else -1 is returned

let numbers = [10,20,30,40,50,60,70];

console.log(numbers.findIndex((item)=>{
    return item === 40;
}));