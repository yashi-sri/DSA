
kashish rawat
15:24
10 - const foo =()=>{
console.log(this.name)
}

foo.call({name:"yashi"})
kashish rawat
15:30
const person = {
firstName: 'John',
lastName: 'Doe',
age: 30,
isEmployed: true,
address: {
street: '123 Main St',
city: 'Anytown',
state: 'CA',
zipCode: '12345'
},}
kashish rawat
15:44
const foo =()=>{
console.log(this.name)
}

foo.call({name:"yashi"})
Sourabh Kumar
15:45
Guys I'm dropping off. Have another meeting. Bye yashi
kashish rawat
15:46
function foo (){
console.log(this.name)
}

foo.call({name:"yashi"})
kashish rawat
15:52
const info = {author: "javascript", cells: 4, metadata: {title: 'just javascript',hasPendingChanges:false}};
function duplicateSpreadsheet(original) {
if (original.hasPendingChanges) {
throw new Error('You need to save the file before you can duplicate it.');
}
let copy = {
created: Date.now(),
author: original.author,
cells: original.cells,
metadata: original.metadata,
};
copy.metadata.title = 'Copy of ' + original.metadata.title;
return copy;
}
console.log(duplicateSpreadsheet(info));
console.log(info);
kashish rawat
16:03
const shape = {
radius: 10,
diameter() {
return this.radius * 2;
},
perimeter: () => 2 * Math.PI * this.radius
};
console.log(shape.diameter());
console.log(shape.perimeter());
kashish rawat
16:06

let person = {name: 'rawat'};
const members = [person];
person = null;
console.log(members);
kashish rawat
16:08

const value = {number: 5};
const multiply = (x = {...value}) => {
console.log((x.number *= 2));
};
console.log(multiply());
console.log(multiply());
console.log(multiply(value));
console.log(multiply(value));
Interview-Frontend software engineer-Enqurious