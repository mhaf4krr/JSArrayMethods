/*this array methods returns true if all the items of the array satisfy a particular condidtion , returns false otherwise */

let numbers = [200,300,400,500];

let isOver100 = (list) =>{
    return list.every((item)=>{
        return item > 100;
    })
}

let result = isOver100(numbers);

console.log(result);


let isOver200 = (list) => {
    return list.every((item) => {
        return item > 200;
    })
}

console.log(isOver200(numbers));