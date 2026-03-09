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

// LOAD ISSUES
function loadIssues(data){

const container = document.getElementById("issuesContainer");

if(!container) return;

container.innerHTML = "";

document.getElementById("issueCount").innerText = data.length;

data.forEach(issue=>{

const border =
issue.status === "open"
? "border-green-500"
: "border-purple-600";

container.innerHTML += `

<div onclick="openModal(${issue.id})"
class="bg-white rounded-lg shadow p-4 border-t-4 ${border} cursor-pointer hover:shadow-lg transition">

<h3 class="font-semibold text-sm mb-2">
${issue.title}
</h3>

<p class="text-gray-500 text-xs mb-3">
${issue.description}
</p>

<div class="flex gap-2 text-xs mb-3">

<span class="bg-red-100 text-red-600 px-2 py-1 rounded">
BUG
</span>

<span class="bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
HELP WANTED
</span>

</div>

<p class="text-xs text-gray-500">
#${issue.id} by ${issue.author}
</p>

<p class="text-xs text-gray-400">
${issue.createdAt}
</p>

</div>

`;

});

}

// FILTER TABS
function filterIssues(type){

if(type === "all"){
loadIssues(issues);
return;
}

const filtered = issues.filter(issue=>issue.status === type);

loadIssues(filtered);

}

// MODAL OPEN
function openModal(id){

const issue = issues.find(i=>i.id === id);

document.getElementById("modalTitle").innerText = issue.title;

document.getElementById("modalDesc").innerText = issue.description;

document.getElementById("modalAuthor").innerText = issue.author;

document.getElementById("modalPriority").innerText = issue.priority;

document.getElementById("modal").classList.remove("hidden");

}

// CLOSE MODAL
function closeModal(){

document.getElementById("modal").classList.add("hidden");

}

// SEARCH FUNCTION
const searchInput = document.getElementById("search");

if(searchInput){

searchInput.addEventListener("input",function(){

const value = this.value.toLowerCase();

const filtered = issues.filter(issue=>
issue.title.toLowerCase().includes(value)
);

loadIssues(filtered);

});

}

// LOAD ISSUES ON PAGE LOAD
window.onload = ()=>{

if(document.getElementById("issuesContainer")){
loadIssues(issues);
}

};