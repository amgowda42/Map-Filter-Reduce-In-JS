//Map fuction :-Map fuction is transformation of array it means that it will transform each and every value of an array an get into a new array;

arr = [1, 2 , 3, 4, 5, 6, 7, 8];
const output = arr.map((x) =>(x*2));
const binary = arr.map((x) =>(x.toString(2)));
console.log(output);
console.log(binary);

// Filter function :- filter fuction is used to filter the Array;

arr = [1, 2, 3, 4, 5, 6, 7];
const Odds = arr.filter((x) =>(x % 2));
console.log(Odds);
const even = arr.filter((x) =>(x % 2===0));
console.log(even);

//Reduce function :- reduce fuction is used to reduce of an array into a single value;

//taking example of sum and the max;

arr = [1, 2, 3, 4, 5, 6, 7];

function FindSum(arr) {
    sum = 0 ;
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}

console.log(FindSum(arr));

const output = arr.reduce((acc, curr) => {
    acc = acc + curr;
    return acc;
},0);
console.log(output)

function FindMax(arr) {
  max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(FindMax(arr));

const output = arr.reduce((acc, curr) => {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, 0);

console.log(output);


const User = [
  { firstName: "John", lastName: "Cena", age: 26 },
  { firstName: "Annappa", lastName: "Gowda", age: 75 },
  { firstName: "Mark", lastName: "Henry", age: 50 },
  { firstName: "Sachin", lastName: "Tendulker", age: 26 },
];

// take all the users Full Name ;
const output = User.map(user => user.firstName+ " " +user.lastName);

console.log(output);

// to get acc = {26:2 , 50 :1 , 75:1}

const output = User.reduce((acc, user) => {
if(
    acc[user.age]
){
    acc[user.age] = ++acc[user.age];

}else {
   acc[user.age] = 1; 
}
return acc;
},{});

console.log(output);

// To get the firat Name of the user whose age is less than 30 

const output = User.filter((x) => x.age < 30 ).map((x) => x.firstName);
console.log(output);
