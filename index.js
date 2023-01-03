function checkPassword() {
    let password = document.getElementById("password").value;
    let passwordBorder = document.getElementById("password");
    let cpasswordBorder = document.getElementById("cnfrm_password");
    let cnfrmPassword = document.getElementById("cnfrm_password").value;
    let message = document.getElementById("message");

    if (password.length != 0) {
        if (password == cnfrmPassword) {
            message.textContent = "Password match";
            passwordBorder.style.borderColor = "#e5e7eb";
            cpasswordBorder.style.borderColor = "#e5e7eb";
            message.style.color = "black";
        } else {
            message.textContent = "Password don't match";
            passwordBorder.style.borderColor = "red";
            cpasswordBorder.style.borderColor = "red";
            message.style.color = "red";
        }
    }

    else {
        passwordBorder.style.borderColor = "#e5e7eb";
        cpasswordBorder.style.borderColor = "#e5e7eb";
        message.textContent = "Need at least 1 character";
    }
}