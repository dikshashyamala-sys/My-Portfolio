function toggleMenu() {
    const menu = document.getElementById("navMenu");

    if (menu) {
        menu.classList.toggle("active");
    }
}

/* Contact Form Validation */
function validateForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const result = document.getElementById("result");

    if (name === "" || email === "" || message === "") {
        result.textContent = "Please fill in all the fields.";
        result.style.color = "red";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        result.textContent = "Please enter a valid email address.";
        result.style.color = "red";
        return;
    }

    result.textContent =
        "Form validated successfully! No message has been sent because no backend is connected.";

    result.style.color = "green";

    document.getElementById("contactForm").reset();
}

/* Welcome Message */
window.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to Dhiksha R's Portfolio Website!");
});

/* Back to Top */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}