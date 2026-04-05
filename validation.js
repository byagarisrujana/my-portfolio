document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    if (!form) return;

    form.addEventListener("submit", function (event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const mobile = document.getElementById("mobile");
        const message = document.getElementById("message");
        const alertBox = document.getElementById("formAlert");

        let valid = true;
        let messages = [];

        if (name.value.trim() === "") {
            valid = false;
            messages.push("Name is required.");
        }
        if (email.value.trim() === "") {
            valid = false;
            messages.push("Email is required.");
        }
        if (mobile.value.trim() === "") {
            valid = false;
            messages.push("Mobile number is required.");
        } else if (!/^\d{10}$/.test(mobile.value.trim())) {
            valid = false;
            messages.push("Mobile number must be exactly 10 digits.");
        }
        if (message.value.trim() === "") {
            valid = false;
            messages.push("Message is required.");
        }

        if (!valid) {
            event.preventDefault();
            event.stopPropagation();
            alertBox.classList.remove("d-none", "alert-success");
            alertBox.classList.add("alert-danger");
            alertBox.innerHTML = messages.join("<br>");
        } else {
            event.preventDefault();
            alertBox.classList.remove("d-none", "alert-danger");
            alertBox.classList.add("alert-success");
            alertBox.textContent = "Form submitted successfully (demo).";
            form.classList.add("was-validated");
        }

        form.classList.add("was-validated");
    }, false);
});