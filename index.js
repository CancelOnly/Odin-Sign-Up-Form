function checkPassword() {
    let password = document.getElementById("password").value;
    let passwordBorder = document.getElementById("password");
    let cpasswordBorder = document.getElementById("cnfrm_password");
    let cnfrmPassword = document.getElementById("cnfrm_password").value;
    let message = document.getElementById("message");
    
    if (password.length != 0) {
        if (password == cnfrmPassword) {
            passwordBorder.style.borderColor = "green";
            cpasswordBorder.style.borderColor = "green";
            message.textContent = "*";
            message.style.color = "black";
        } else {
            message.textContent = "*Password don't match";
            passwordBorder.style.borderColor = "red";
            cpasswordBorder.style.borderColor = "red";
            message.style.color = "red";
        }
    }
    
    else {
        message.textContent = "*";
    }
}