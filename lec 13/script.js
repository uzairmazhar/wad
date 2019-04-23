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


var database = {username:"Uzair", password:"123"}

var newsfeed = [{friend:"Bashair" ,status:"I am feeling Sad"}, {friend:"Hamza",status:"This is Spartaaaaaaaa"}]


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


/*

var calculator = function (){
    console.log("Calc Function Expression");
}

calculator();*/
