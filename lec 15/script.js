/*
https://developer.mozilla.org/en-US/docs/Web/Events
https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
*/

/*var b1 = document.getElementsByTagName("button")[0];

b1.addEventListener("mouseenter",function () {
    console.log("mouse entered !")
})*/

var button = document.getElementById("enter");
var input = document.getElementById("user-input");
var ul = document.getElementsByTagName("ul")[0];
var listItems = document.getElementsByTagName("li");
var deletebutton=document.getElementsByClassName("del");

console.log(button);

button.addEventListener("click",function(){
    console.log("mouse clicked");

    if(input.value.length>0) {
        var li=document.createElement("li");
        var btn=document.createElement("button");
        li.append(document.createTextNode(input.value));
        btn.append(document.createTextNode("Delete"));
        btn.classList.add("del");
        li.append(btn);
        ul.append(li);
        input.value='';
        addDeleteListener();
        addtoggle();
    }
});

input.addEventListener("keypress",function(o){
    console.log(o);

    if(input.value.length>0&& o.which ===13) {
        var li=document.createElement("li");
        var btn=document.createElement("button");
        li.append(document.createTextNode(input.value));
        btn.append(document.createTextNode("Delete"));
        btn.classList.add("del");
        li.append(btn);
        ul.append(li);
        input.value='';
        addDeleteListener();
        addtoggle();
    }
    });

function deleteItem(){
    this.parentElement.remove();
}

function isDone(){
    this.classList.toggle("done");
}
function addtoggle() {
for(var i=0;i<listItems.length;i++){
    listItems[i].addEventListener("click",isDone);
    }
}
function addDeleteListener() {
    for (var i = 0; i < deletebutton.length; i++) {
        deletebutton[i].addEventListener("click", deleteItem);
    }
}

function working(){

}
addtoggle();
addDeleteListener();
//image slider