//  LOGIN FUNCTION
function login(){

const username = document.getElementById("username").value;
const password = document.getElementById("password").value;

if(username === "admin" && password === "admin123"){
window.location = "main.html";
}else{
alert("Invalid credentials");
}

}