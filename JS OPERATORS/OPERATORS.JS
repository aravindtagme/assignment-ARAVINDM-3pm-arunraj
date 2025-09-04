//Addition
let test = 30;
let odi = 51;
let t20 = 1;
let total = test+ odi+ t20;
console.log(total);
document.getElementById("adds").innerHTML = " Virats Total Century is "  +  total;

//Subtraction 
let SouthRainfall = 815
let EnERainfall = 1178
let difference = EnERainfall - SouthRainfall
console.log( difference);
document.getElementById("subs").innerHTML = "Differce b/w Southern & NE rainfall in 2024 in millemetre is "  +  difference;

//Multiplication 
let mul01 = 20
let mul02 = 40
let mul03 = mul01*mul02
console.log( mul03)
document.getElementById("multiple").innerHTML = "Multiplication of 20 and 40 is "  +  mul03;

//Division

let div01 = 96
let div02 = 3
let div03 = div01/div02
console.log(div03);
document.getElementById("adds").innerHTML = "Division of 96 by 3 is "  +  div03;

//Exponentiaiton
let ex01 = 5
let ex02 = 3
let ex03 = ex01**ex02
console.log(ex03);
document.getElementById("expo").innerHTML = "Exponentiation of 5^3 is "  +  ex03;

//Remainder
let rem01 = 97
let rem02 = 3
let rem03 = rem01%rem02
console.log( rem03);
document.getElementById("rem").innerHTML = "Remainder of 97 by 3 is "  +  rem03;

// Assignment Operators
let xy = 25;
xy += 35;
console.log(xy);
document.getElementById("asop1").innerHTML = " Value of xy += 35 if xy=25 is "  +  xy;

let yz = 45;
yz -= 20;
console.log( yz);
document.getElementById("asop2").innerHTML = " Value of yz += 45 if yz=20 is "  +  yz;

let xz = 10;
xz *= 5;
console.log(xz);
document.getElementById("asop3").innerHTML = " Value of xz *= 5 if xz= 10  is "  +  xz;

let ab = 45;
ab /= 5;
console.log( ab);
document.getElementById("asop4").innerHTML = " Value of ab /= 5 if ab=45 is "  +  ab;

let bc = 47;
bc %= 5;
console.log( bc);
document.getElementById("asop5").innerHTML = " Remainder value of bc %=5 if bc=47 is "  +  bc;

let cd = 9;
cd **= 3;
console.log(cd);
document.getElementById("asop6").innerHTML = " Exponentiation value of cd **= 3 if cd = 9 is "  +  cd;

let goa = 55;
let pondi = 55;
let joy = goa == pondi
console.log(joy )
document.getElementById("coop1").innerHTML = " Value of Goa and Pondi is equal if 55 is assigned then " + joy;

let mango = 55;
let papaya = 65;
let juice = mango != papaya;
console.log( juice);
document.getElementById("coop2").innerHTML = " Value of mango is 55 and papaya is 65 then mango != papaya is " + joy;

let gold = 100;
let silver = 90;
let ornaments = gold > silver 
console.log(ornaments);
document.getElementById("coop3").innerHTML = " Value of gold is 100 and silver is 90 then gold > silver is " +  ornaments;

let copper = 55;
let brass = 45;
let metals = copper < brass 
console.log(metals);
document.getElementById("coop4").innerHTML = " Value of copper is 55 and brass is 45 then copper < brass is " + metals;

let ocean = 100;
let river= 40;
let water = ocean >= river
console.log(water);
document.getElementById("coop5").innerHTML = " Value of ocean is 100 and river is 40 then ocean >= river is " + water;


let laugh = 200
let smile =50
let expression = laugh <= smile
console.log(expression);
document.getElementById("coop6").innerHTML = " Value of laugh is 200 and smile is 50 then laugh <= smile is " + expression;

let CeilingFan = 55
let TableFan = 55
let fans = CeilingFan>10 && TableFan>10
console.log(fans);
document.getElementById("loop1").innerHTML = " && operator is used if ceilingfan and tablefan is comes under fans category then o/p is " + fans;


let eagle = 100
let turtle = 50
let reptile = eagle<50 || turtle>45
document.getElementById("loop2").innerHTML = " || is used if any oneof the animals like eagle or turtle is comes under reptile category then o/p is " + reptile;

let  KawasakiNinja = 1000
let YamahaR15 = 300
let FastestCar = !(KawasakiNinja > YamahaR15)
console.log( FastestCar);
document.getElementById("loop3").innerHTML = "! Not is used to check which one fastest car in b/w kawasakiNinja and YamahaR15 then o/p is " + FastestCar + "<br>" + "because both of the vehicles is comes under two wheeler category"








