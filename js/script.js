function validateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name.trim() === "") {
        alert("Please enter your name");
        return false;
    }

    if (email.trim() === "") {
        alert("Please enter your email");
        return false;
    }

    return true;
}