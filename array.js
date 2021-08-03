let grades = [98.5, 94.3, 89.2, 90.1];
 console.log(grades[0])

/* let grade = {}
 console.log(grade)*/


  let grade = {
 	//object uses properties. or a key-value pair
 	firstGrading: 89.2,
 	secondGrading: 98.5,
 	thirdGrading: 90.1,
 	fourthGrading: 94.3
 };

 console.log(grade.firstGrading)

  let person = {
  	firstName: 'John',
  	lastName: 'Smith',
  	location: {
  		city: 'Tokyo',
  		country: 'Japan'
  	},
  	emails: ['john@mail.com', 'johnsmith@mail.xyz'],
  	fullName: function(){
  		return this.firstName + ' ' + this.lastName;
  	}
  };
console.log(person.firstName);
console.log(person.lastName);
console.log(person.location.city);
console.log(person.emails[0])
console.log(person.fullName())


/*  const person1 = {
  name: 'Judy',
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
}

const person2 = {
  name: 'Deepti',
  greeting: function() {
    alert(Hi! I\'m ' + person2.name + '.');
  }
}*/

/*console.log(person1.greeting());
console.log(person2.greeting())*/

/*function Person() {
	this.firstName;
	this.lastName;
}

let personA = new Person();

console.log(personA)*/

function Person(firstName, lastName){
	this.firstName = firstName;
	this.lastName = lastName;
}

let personA = new Person('John', 'Smith')
console.log(personA)

//lets add another data
let myFather = new Person('John', 'Doe');
let myMother = new Person('Sally', 'Doe')

console.log(myFather)
console.log(myMother)
console.log("My Father is " + myFather.firstName + " and my Mother is " + myMother.firstName)


let anime = [ "Pikachu", "Doraemon", "Daimos", "Luffy"]
/*for (let i = 0; i < 4; i++){
  console.log(friends[i])
}
*/
anime.forEach(function(name){
  console.log(name)
})


let numbers = [1,13,5,2,6,8]
//doubled all the numbers
numbers.forEach(function(num){
  console.log(num * 2)
})


//display only odd numbers
numbers.forEach(function(number){
  if(number % 2){
    console.log(number)
  }
})


//save another value to array using .map
//it creates a new array 
//calls the provided function once for each element in an array
//does not execute the function for array elements without values
//this method does not change the original array
let newNumbers = numbers.map(function(no){
  return no *2
})

console.log(newNumbers)


//create a new array of squared numbers
let squaredNumbers = numbers.map(function(numb){
  return numb * numb
})

console.log(squaredNumbers)




//filter
////if the element passed the condition, it will be stored in a new array

//Write a function that filters a list of strings and returns a list with only your friends name in it.
//If a name has exactly 4 letters in it, he is a friend.


let friends = ["Alex", "Teds", "Otep", "Buknoy", "Kaloy", "Natoy", "Buloy"]
/*console.log(friends)*/

let filteredFriends = friends.filter(function(friend){
  return friend.length === 4;

})

console.log(filteredFriends)
console.log(friends[friends.length-1])



let people = [
  {
    name: "Juanita",
    age: 13
  },
  {
    name: "Juanito",
    age: 14
  }

]

people.forEach(function(person){
  console.log(person.name)
})

console.log(people[0].name + " " + people[1].age)


const studentGrades = [
    { studentId: 1, Q1: 89.3, Q2: 91.2, Q3: 93.3, Q4: 89.8 },
    { studentId: 2, Q1: 69.2, Q2: 71.3, Q3: 76.5, Q4: 81.9 },
    { studentId: 3, Q1: 95.7, Q2: 91.4, Q3: 90.7, Q4: 85.6 },
    { studentId: 4, Q1: 86.9, Q2: 74.5, Q3: 83.3, Q4: 86.1 },
    { studentId: 5, Q1: 70.9, Q2: 73.8, Q3: 80.2, Q4: 81.8 }
];

for(let i = 0; i < studentGrades.length; i++){
  let student = studentGrades[i]
  let average = (student.Q1 + student.Q2 + student.Q3 + student.Q4) / 4

//parseFloat = returns the number as a number, not a string
//toFixed = converts a number into a string, rounding to a specific number of decimals
  student.average = parseFloat(average).toFixed(1)
}

console.log(studentGrades)


//ES6 updates
class Persont {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  printName() {
    return `${ this.firstName } ${ this.lastName }`
  }
}

let cardo = new Persont("Cardo","Dalisay");

console.log(cardo.lastName)

class People1 {
  constructor(name) {
    this.name = name;
  }
  introduce(){
    console.log(`Hello, my name is ${this.name}`)
  }
}

const jane = new People1('Jane')

console.log(jane.name)



//ARrow function

/*function generateFullName(firstName, middleInitial, lastName) {
  return firstName + ' ' + middleInitial + '. ' + lastName
}

generateFullName('Judy', 'B.', 'Medalla')
*/

let numberss = [1, 2, 3, 4, 5]

let numbersMap = numberss.map(number => number * number);

console.log(numbersMap)

let message = ` one plus one = ${1+1}`;
console.log(message)

let a, b, rest;

[a, b] = [10, 20]

console.log(a)
console.log(b)

let firstName, middleName, lastName ;

[firstName, middleName, lastName] = ["Juan", "Dela", "Cruz"];

let fullName = `${firstName} ${middleName} ${lastName}`
console.log(fullName)



const persons = {
    firstName: "jane",
    middleName: "Dela",
    lastName: "Cruz"
}

const generateFullName = (firstName, middleName, lastName) =>{
    return `${firstName} ${middleName} ${lastName}`
}

generateFullName(persons.firstName, persons.middleInitial, persons.lastName);

console.log(persons.firstName, persons.middleInitial, persons.lastName)