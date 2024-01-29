let submit = document.querySelector("#signIn");
submit.addEventListener("click", function(event) {
    event.preventDefault();
    let email = document.querySelector("#Email");
    let password = document.querySelector("#Password");
    let Email = localStorage.getItem("Email");
    let Password = localStorage.getItem("Password");
    if (email.value === "" || password.value === "") {
        alert("Please Fill The Data!");
    } 
    else {
        if(email.value.trim() === Email && password.value.trim() === Password){
            setTimeout(() => {
                window.location = "../html/products.html";
            }, 1500);
        }else{
            alert("Incorrect Data!");
        }
    }
});

