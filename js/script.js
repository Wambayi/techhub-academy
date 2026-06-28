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
function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

}
window.onload = function () {

    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.add("dark-mode");

    }

};