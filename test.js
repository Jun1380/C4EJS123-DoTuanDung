// bai 1
{
let str_input = 'program';
let reverse_str = '';

for (let i= str_input.length -1; i >= 0; i--){
  reverse_str += str_input[i];
}

console.log(reverse_str);
 
}


// bai 2

const noti = ' this is Test'

const capitalize = str => {
    if (str) return ''
    return str.charAt(0).toUpperCase() +
    str.slice(1)
}



{bai3
let dayso = [1,2,3,3,4,5,4,4,4,4,5,5];
let  update= new Set(dayso);
console.log(update);
}


// Bai 4
let person = [{
    name: "Dung",
    age: 18,
salary: '30000$',
position: 'Boss',},

{name: 'Duong',
age: 19,
salary: '25000$',
position:'Manager',},

{name: 'Ton',
age: 19,
salary: '10000$',
position: 'Staff',},

 ] ;

console.log(person);

let newPerson = prompt('Nhap ten nguoi moi');
person.push({
    newPerson,
    age: 19,
  salary: '10000$',
  position: 'Teacher',
});


let  ask = prompt('age');
let ask2 = prompt('salary');
let ask3 = prompt('position');
person['ask', 'ask 2', 'ask 3'] = updateProfile;

