// script.js
document.querySelectorAll("header nav ul li a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for your message!");
    form.reset();
});
