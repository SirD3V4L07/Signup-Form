document.querySelector("form").addEventListener("submit", function(event) {
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("password-confirm").value;

    if (password != confirm_password) {
        document.getElementById("message").innerHTML = "Passwords do not match";
        document.getElementById("message").style.display = "block";
        event.preventDefault();
    }
});