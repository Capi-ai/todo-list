// var database = [
// 	{
// 		username: "alberto",
// 		password: "supersecret"
// 	},
// 	{
// 		username: "sally",
// 		password: "123"
// 	},
// 	{
// 		username: "ingrid",
// 		password: "777"
// 	},
// ];

// var newsfeed = [
// 	{
// 		username:"Bobby",
// 		timeline: "So tired from all learning",
// 	}, 
// 	{
// 		username:"Sally",
// 		timeline:"Javascript is so cool",
// 	},
// 	{
// 		username:"Mitch",
// 		timeline:"Javascript is pretty cool!"
// 	},
// ];

// function isUserValid(user,pass) {
// 		for (var i=0; i<database.length; i++) {
// 		if (database[i].username === user &&
// 			database[i].password === pass) {
// 			return true;
// 		}
// }
// 		return false;
// }

// function signIn(user,pass) {
// 	if (isUserValid(user,pass)) {
// 		console.log(newsfeed);
// 	} else {
// 		alert("Sorry, wrong information")
// 	}
// }

// var userNamePrompt = prompt("What is your username?");
// var passwordPrompt = prompt("Type your password")

// signIn(userNamePrompt,passwordPrompt);

var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector("ul");
var lis = document.getElementsByTagName("li");
var ints = document.getElementsByTagName("input");

function newIds() {
	for (var i = 1;i < Number(ul.children.length)+1;i++) {
		ints[i].setAttribute("id","ch" + i);
		lis[i-1].setAttribute("id",i);
	}
}

function removeIds() {
	for (var i = 1;i < Number(ul.children.length) + 1;i++) {
		ints[i].removeAttribute("id");
		lis[i - 1].removeAttribute("id");
	}
	newIds()
}

function inputLength() {
	return input.value.length;
}
function createListElement() {
	numItems = Number(ul.children.length) + 1;
	var li = document.createElement("li");
	var int = document.createElement("input")
	int.appendChild(document.createTextNode(""))
	li.id = numItems;
	int.type = "checkbox";
	int.id = "ch" + numItems;
	li.appendChild(int);
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	numItems=[];
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeyPress(event) {
	if (event.keyCode === 13 &&
		inputLength() > 0) {
		createListElement();	
	}
}


function delItem() {
	var idx = event.target.attributes.id.value;
	document.getElementById(idx).remove();
	var lid = idx.replace("ch",""); 
	document.getElementById(lid).remove();
	removeIds();
}

function sketchItem(event) {
	var idx = Number(event.target.attributes.id.value)-1;
	if (lis[idx].style.textDecoration == "line-through") {
		lis[idx].style.textDecoration = "";
	} else {
		lis[idx].style.textDecoration = "line-through";
	}
}

function checkItem() {
	for (var i = 0;i < Number(ul.children.length);i++) {
		lis[i].addEventListener("click",sketchItem);
		ints[i + 1].addEventListener("click",delItem);
		ints[i + 1].addEventListener("click",removeIds);
	}
}



ul.addEventListener("mouseover",checkItem);
button.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterKeyPress);