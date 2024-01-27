let submit = document.querySelector("#register");
submit.addEventListener("click", function(event) {
    event.preventDefault();
    let fname = document.querySelector("#FName");
    let lname = document.querySelector("#LName");
    let email = document.querySelector("#Email");
    let password = document.querySelector("#Password");
    if (fname.value === "" || lname.value === "" || email.value === "" || password.value === "") {
        alert("Please Fill The Data!");
    } else {
        localStorage.setItem("FirstName", fname.value);
        localStorage.setItem("LastName", lname.value);
        localStorage.setItem("Email", email.value);
        localStorage.setItem("Password", password.value);

        setTimeout(() => {
            window.location = "../html/logIn.html";
        }, 1500);
    }
});
