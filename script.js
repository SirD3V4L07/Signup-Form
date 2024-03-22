document.querySelector("form").addEventListener("submit", function(event) {
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("password-confirm").value;

    if (password != confirm_password) {
        document.getElementById("message").innerHTML = "Passwords do not match";
        document.getElementById("message").style.display = "block";
        document.getElementById("password").style.borderColor = "red";
        document.getElementById("password-confirm").style.borderColor = "red";
        event.preventDefault();
    }
});

function submitForm () {
    let filledForm = document.getElementById("signupForm");
    let firstName = filledForm.elements["first-name"].value;
    let lastName = filledForm.elements["last-name"].value;
    let email = filledForm.elements["email"].value;
    let phoneNumber = filledForm.elements["phone-number"].value;
    let password = filledForm.elements["password"].value;
    let heading = document.getElementById("heading");
    heading.innerHTML = "Submitted Information: ";
    filledForm.innerHTML = `
    <form id="signupForm" action="#" method="post">
                <div class="form-group">
                    <div class="field-group">
                        <label for="first-name">First Name</label>
                        ${firstName}
                    </div>
                    <div class="field-group">
                        <label for="last-name">Last Name</label>
                        ${lastName}
                    </div>
                    <div class="field-group">
                        <label for="email">Email</label>
                        ${email}
                    </div>
                </div>
                <div class="form-group">
                    <div class="field-group">
                        <label for="phone-number">Phone Number</label>
                        ${phoneNumber}
                    </div>
                    <div class="field-group">
                        <label for="password">Password</label>
                        ${password}
                    </div>
                    
                </div>
            </form>
    `;
}