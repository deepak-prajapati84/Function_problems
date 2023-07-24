/*'user strict';

let hasDrivid=false;

const prenst=true;

if(prenst) hasDrivid=true;
if(hasDrivid) console.log('I drivid a car');

function layer(){
    console.log("MY Name is Deepak Prajapati");
}
//Calling the function
layer();

let last=()=>{
    console.log("MY last Name Prajapati");
}
//calling
last();

let dee=(apply,mango)=>{
    console.log(apply,mango);
   const Apply=`Apply ${apply} and ${mango}`;
   return Apply;
}
const d=dee(5,3);
console.log(d);

function celebra(Birthday){
    return 2023-Birthday;
}
const Year=celebra(2004);
console.log(Year);
const celebra2=function (Birthday){
    return 2023-Birthday;
}
const Year2 =celebra2(2004);
console.log(Year,Year2);

*/

/*
const cutFriute=function(Friut){
    return Friut*4;
};

const Friute= function (apple,orang)
{
    const applePiece=cutFriute(apple);
    const orangPiece=cutFriute(orang);

    const juice=`Juice ${applePiece}  with the orang ${orangPiece}`;
    return juice;
}

console.log(Friute(2,4));
*/

/*
const Age=function (Birthday){
    return 2023-Birthday;
}

const age=function (Birthday){
    const age=Age(Birthday);
    const rel=20-age;
    return `Age ${age}`;
}

console.log(age(2004));
*/

/*
const calAvarge=(a,b,c)=>(a+b+c)/3;
console.log(calAvarge(3,4,5));

const scrol=calAvarge(44,27,71);
const scrolphile=calAvarge(65,54,49);
console.log(scrol,scrolphile);

const checkwin=function(avgD,avgK){
    if(avgD>=2*avgK){
        console.log(`Winner (${avgD} ..vs ${avgK} )`);
    }else if(avgK=>2*avgD){
        console.log(`Winner (${avgK} ..vs ${avgD} )`);
    }
    else{
        console.log("NO Winner Team");
    }
}
checkwin(scrol,scrolphile);
*/

/*
const friend1="Deepak";
const friend2="rajan";
const friend3="Abhishek";
const friend4="Piyush";

const friends=["Deepak","Rajan","Abhishek","Piyush"];
console.log(friends);

const years=new Array(19,19,19,22);
console.log(friends[1]);
console.log(friends.length);
console.log(friends.length-1);
friends[3]="Prajapati";
console.log(friends);
friends.push("Anjali");
console.log(friends);
const put=friends.push("Prajapat");
console.log(put);
*/

/*
const tips=function(bill){
    return bill >=50 && bill<=300?bill*0.15:bill*0.2;
}

const bills=[125,555,44];
const tip=[tips(bills[0]),tips(bills[1]),tips(bills[2])];
const table=[bills[0]+tip[0],bills[1]+tip[1],tip[2]+bills[2]];
console.log(bills,tip,table);

const deepakArray=[
    "Deepak",
    'prajapati',
    2023-2030,
    'Rajan',
    'Abhishek',
    ["Anjali",'Prajapati','priti','Aman'],
];

console.log(deepakArray);

const deepak={
    friends:["Deepak",'Prajapati','Piyush','maurya'],
    age:19,
    address:"Sawaiya Pattidari",
    lastname:"Prajapati",
    firstname:"Deepak",
}
console.log(deepak);
console.log(deepak.lastname);
console.log(deepak.firstname);
console.log(deepak.friends);
console.log(deepak.address);
console.log(deepak['age']);

const eepa=prompt("what do you want to about deepak? firstName ,LastName,Age");
console.log(deepak[eepa]);
*/

function add(){
    var a=10;
    console.log(a);
    var b=30;
    console.log(b);
    return;
}
console.log(add());//output 10/30/undefined

let c=function add(){
    let a=10;
    console.log(a);
    var b=30;
    console.log(b);
    return 300;
}

console.log(c());//output 10/30/300

function addtion(a="Pankaj" , b="Deepak"){
    return a+b;
}

console.log(addtion());//Pankaj/Deepak

function addtion1(a="Pankaj" , b="Deepak"){
    return a+b;
}

console.log(addtion1(202,200));//402

function addtion2(a=202 , b=200){
    return a+b;
}

console.log(addtion2("depak","suraj"));//Pankaj/Deepak

let aa;
function C(a,b){
    return a+b ;   
}

aa=C(20,30)//empty() the value becouse aa is not defined

console.log(aa);
