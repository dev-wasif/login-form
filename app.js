// Sign Up function
function savedData() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "") {
        alert("Please enter your email");
        document.getElementById("email").style.border = "2px solid red";
        document.getElementById("email").focus();
        return;
    }
    
    if (password === "") {
        alert("Please enter your password");
        document.getElementById("password").style.border = "2px solid red";
        document.getElementById("password").focus();
        return;
    }

    // Save to sessionStorage
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("password", password);


    alert("Account Created Successfully!");
    window.location.href = "index.html";
}

// Login function
function login() {

    let loginEmail = document.getElementById("emailInp").value;
    let loginPassword = document.getElementById("pwdInp").value;




    if (loginEmail === "") {
        alert("Please enter your email");
        document.getElementById("emailInp").style.border = "2px solid red";
        document.getElementById("emailInp").focus();
        return;
    }


    if (loginPassword === "") {
        alert("Please enter your password");
        document.getElementById("pwdInp").style.border = "2px solid red";
        document.getElementById("pwdInp").focus();
        return;
    }


    let savedEmail = sessionStorage.getItem("email");
    let savedPassword = sessionStorage.getItem("password");


    if (loginEmail === savedEmail && loginPassword === savedPassword) {
        alert("Login Successful! ");
        window.location.href = "https://dev-wasif.github.io/Tech_clone/";
    } else {
        alert("Wrong Email or Password ");

        document.getElementById("emailInp").style.border = "2px solid red";
        document.getElementById("pwdInp").style.border = "2px solid red";
    }
}


