let Name = localStorage.getItem("FirstName");
let cart = document.getElementById('cart');
let logOut = document.getElementById('logOut');
let username = document.getElementById('userName');
let login = document.getElementById('logIn');
let signUp = document.getElementById('signUp');
if(Name){
    cart.style.display = "block";
    logOut.style.display = "block";
    username.style.display = "block";
    username.innerHTML = Name;
    login.style.display = "none";
    signUp.style.display = "none";
}else{
    cart.style.display = "none";
    logOut.style.display = "none";
    username.style.display = "none";
    login.style.display = "block";
    signUp.style.display = "block";
}
logOut.addEventListener('click',function(event){
    event.preventDefault();
    cart.style.display = "none";
    logOut.style.display = "none";
    username.style.display = "none";
    login.style.display = "block";
    signUp.style.display = "block";
})
