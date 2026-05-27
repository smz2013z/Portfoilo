let available = true;

function contactMe() {
    alert("Message me to book an edit!");
}

function changeStatus() {
    let status = document.getElementById("status");

    if (available) {
        status.textContent = "Currently editing 🔥";
        status.style.color = "orange";
    } else {
        status.textContent = "Available for edits";
        status.style.color = "red";
    }

    available = !available;
}

let revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    for (let i = 0; i < revealElements.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = revealElements[i].getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            revealElements[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();