for(let z=1;z<10; z++)
{
console.log("Counts =" + z);
} 



let banana =1;
while (banana<5){
    console.log(" No of fruits ="+ banana);
    banana++;
}

let dragonfruit = 1
let gh = 1
while( gh < 10){
    dragonfruit = dragonfruit + gh; // assignment operator += 
    gh++
}
console.log( " Total Dragon Fruit in numbers :" + dragonfruit );


let x=1;
do{
    console.log("do while loop count= "+ x);
    x++;
}
while(x<5);

let goa = "Fun"; // string
let pondi = 0; //number
do {
    pondi++;
}
while ( goa === pondi) // string not equals to number
console.log( " No of Attempt :" + pondi ) 



let god = "SivanParvathi"; // strings 

for (let letter of god) 
    {
  console.log("Num of Letter :", letter);
}

const numbers = [10,20,30,40,50]; //array 
for ( let i of numbers)
    {
    console.log(i);
}



const person ={   //objectname
    Name : "Kalam", //keyname : keyvalue
    Age : 83
}
for (let key in person){
    console.log( key + ":"+ person[key] )   
}

