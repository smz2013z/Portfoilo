// ===== CONTACT POPUP =====
// EDIT HERE: change this message to your real contact info
function contactMe() {
    alert("Email me at \nsamvfx02@gmail.com");
}

// ===== STATUS TOGGLE =====
let available = true;

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

// ===== SCROLL REVEAL ANIMATION =====
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

// ===== FAQ TOGGLE =====
function toggleFAQ(index) {
    let answers = document.querySelectorAll(".faq-answer");
    let answer = answers[index];

    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}
