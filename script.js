document.querySelectorAll(".open-btn").forEach(button => { // Card Button Behavior
    button.addEventListener("click", () => {
        alert("Open Button Clicked!");
    });
});

// Dark Mode Toggle
const toggle = document.getElementById("darkModeToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")){
        toggle.textContent = "☀️";
    } else {
        toggle.textContent = "🌙";
    }
});