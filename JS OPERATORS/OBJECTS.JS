//

// Objects in JS are collection of key-value pairs, each key is called property.


// if it is a function then we say it as methods 

//{}
// key : value
// object.key or object["key"]

// let student = { name : " Kalam", age : 83, grade : "S" };
// console.log(student.name);
// console.log(student["grade"]);

// let student = { 
//     name : " Kalam", 
//     age : 83, 
//     grade : "S",
//     yearofbirth : function() {
//         return 2025 - this.age  //this is represent the object name, it should be inside the block.
//     }
// };
// console.log( student.yearofbirth());    // callback function 



// let students = {
//     name : " Modi",
//     age : 75,
//     bloodGroup : "O-"
// };
// let { name , age , bloodGroup} = students    //Object Destructring 
// console.log(students.bloodGroup);



// class student {
//     constructor ( name, age, grade){
//         this.name = name;
//         this.age = age;
//         this.grade = grade;
//     }
// }
// let s1 = new student (" sivan", 300, " A+" );
// let s2 = new student ( " parvathi ", 299, "A-" );
// console.log(s1.name);
// console.log(s2.grade);




// Prototype Inheritance 
// class person {
//     constructor ( name, age){
//         this.name = name;           // Parent BLock
//         this.age= age;
//     }
// }                               

// class student extends person{           
//     constructor ( name, age , grade){
//         super(name, age);               // super inheritaes the parent block
//         this.grade= grade;
//     }
// }

// let s1 = new student ("SIvan ", 20, " A+" )
// console.log(s1.name,"is",s1.age,"years old");



//Array is a collection of values stored in a single variable

// let number = [ 10, 15,20, 25, 30, 35 ]
// console.log(number[2], number[5])

// const symbol = [ "!", "@", "#", "%"]
// console.log(symbol[0], symbol[3]);

// const string = [ " sivan", "Parvathi", " Muruga", " Ganasha"]
// console.log(string[0], string[3]);

// let objects = [ 
//     { name :" vishnu", age:" Infinite"},
//     { name : "braman", age:"countless"},
//     { name : "narathar", age: "300 crore"}
// ]
// console.log(objects[0] , objects[2]);

// Common Array Methods 

// let fruits = [ " apple", "orange"]

// fruits.push("orange") // push adds the orange in the last index of array
// fruits.unshift("papaya") // unshift adds the papaya in the inital indexing i.e zero
// fruits.pop();

// console.log(fruits);

// Array Length = lenght property returns the length i.e size of an array

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let size = fruits.length;
// console.log( size );


// // Array toString() = method returns the element of an array as a comma separated string

// const fruit = ["Banana", "Orange", "Apple", "Mango"];
// let myList = fruit.toString();
// console.log(myList);

// // Array Join = joins all array elements in to a string 

// const fruity = ["Banana", "Orange", "Apple", "Mango"];
// let myLists= fruity.join("*");
// console.log(myLists);

let fruits = ["Apple", "Banana", "Mango", "dragonfruit"] ;
console.log(fruits);

fruits.push("SAPOTA");
console.log("PUSH OBJECTS:", fruits);

fruits.pop();
console.log("POP OBJECTS:", fruits);

fruits.unshift("WATERLEMON");
console.log("UNSHIFT OBJECT:", fruits);

fruits.shift();
console.log("SHIFT OBJECT:", fruits);

delete fruits[2];
fruits[2] = "LADIESFINGER";
console.log("2nd index fruit value : ", fruits);





