// Set initial count
let count = 0;

// Select value and buttons
const value = document.getElementById("value");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.currentTarget.classList.contains("increase")) count++;
    else if (e.currentTarget.classList.contains("decrease") && count > 0)
      count--;
    else if (e.currentTarget.classList.contains("reset")) count = 0;

    if (count > 0) value.style.color = "green";
    else if (count === 0) value.style.color = "#222";
    value.textContent = count;
  });
});
