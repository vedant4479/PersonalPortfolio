(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        console.log("Form submission prevented, proceeding with custom validation.");

        const nameInput = form.querySelector('input[name="name"]');
        const emailInput = form.querySelector('input[name="email"]');
        const subjectInput = form.querySelector('input[name="subject"]');
        const messageInput = form.querySelector('textarea[name="message"]');

        if (!nameInput.value || !emailInput.value || !subjectInput.value || !messageInput.value) {
            alert("Please fill out all fields before submitting the form.");
            return;
        }

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailInput.value.match(emailPattern)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Custom submission with fetch
        fetch(form.action, {
            method: form.method,
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                alert("Thank you for your message! We'll get back to you soon.");
                form.reset(); // Clear the form after submission
            } else {
                alert("Oops! There was a problem submitting your form.");
            }
        })
        .catch(error => {
            alert("Oops! There was a problem submitting your form.");
        });
    });
});

