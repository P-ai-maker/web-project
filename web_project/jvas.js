function checkPassword() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("ConfirmPassword").value;
    console.log(password, confirmPassword);
    let messageElement = document.getElementById("message");
    if (password.length != 0) {
        // Check if the lengths of password and confirmPassword are equal
        if (password === confirmPassword) {
            messageElement.textContent = "Passwords match";
        } else {
            messageElement.textContent = "Passwords don't match";
        }
    } else {
        messageElement.textContent = "Password cannot be empty";
    }
}