//find method returns the object not the index , that matches the search criteria and if not found returns undefined

let people = [{name:'Hyder',work:'developer'},
    {name:'Boss',work:'ml'},{name:'Tabish',work:'ml'},{name:'Mohsin',work:'web'}];

let findPersonWho = (work) =>
{
    let found = people.find((person)=>{
        return person.work === work;
    })

    return found;


}

console.log(findPersonWho('ml'));