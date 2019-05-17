function calc(n1,n2) {
    return n1+n2;
}

/*
console.log(calc(3,4));
*/

/*var citylist = [12,"lhr",false];

var user = [{
    name: "Uzair",
    age: 20,
    isAlive:true,
    favWebsite:["The imitaion Game","Ratatouile"],
    teach : function () {
        console.log("Gaming ");

    }
}
]*/


temp = prompt ("Enter first num");
temp2 = prompt ("Enter second num");
temp3 = prompt ("Enter operation");

if(temp3=="+"){
    console.log("Addition = "+temp+temp2);
}
if(temp3=="-"){
    console.log("Subtraction = "+temp-temp2);
}
if(temp3=="*"){
    console.log("Multiplication = "+temp*temp2);
}
if(temp3=="/"){
    console.log("Division = "+temp/temp2);
}


var database = [{username:"Uzair", password:"123"},{username:"Bashair",password:"456"},{username:"Hamza",password:"789"}];

var newsfeed = [{friend:"Bashair" ,status:"Kadi wich pawaya hai"}, {friend:"Hamza",status:"This is Spartaaaaaaaa"}];


temp= prompt("Enter your Name");
temp2= prompt("Enter your Password");

if(temp == database.username)
{
    if(temp2 == database.password)
    {
        console.log("Welcome "+temp);
        console.log(newsfeed[0],newsfeed[1]);
    }
}
else
{
    console.log("Incorect Username or password");
}


var cities=[
    "Lahore",
    "Krachi"

];
for(var i=0;i<cities.length;i++){
    console.log(cities[i]);
}
database.forEach(function (c) {
    console.log(c);

})

/*

var calculator = function (){
    console.log("Calc Function Expression");
}


calculator();*/
