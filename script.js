//  LOGIN FUNCTION
function login(){

const username = document.getElementById("username").value;
const password = document.getElementById("password").value;

if(username === "admin" && password === "admin123"){
window.location = "home.html";
}else{
alert("Invalid credentials");
}

}

// GENERATE 50 ISSUES DATA
const issues = [];

const priorities = ["HIGH","MEDIUM","LOW"];
const authors = ["john_doe","fahim","maria","rahim","karim"];
const statuses = ["open","closed"];

for(let i=1;i<=50;i++){

const issue = {

id:i,

title:"Fix Navigation Menu On Mobile Devices",

description:
"The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",

status: statuses[Math.floor(Math.random()*statuses.length)],

author: authors[Math.floor(Math.random()*authors.length)],

priority: priorities[Math.floor(Math.random()*priorities.length)],

createdAt:"1/15/2024"

};

issues.push(issue);

}