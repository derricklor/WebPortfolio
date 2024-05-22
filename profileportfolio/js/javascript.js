
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        //console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show')
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));




// Get the button and form elements
var showFormBtn = document.getElementById("show-form-btn");
var form = document.getElementById("contact-form");

// Add a click event listener to the button
showFormBtn.addEventListener("click", function() {
// Toggle the form display
if (form.className === "invisible") {
    form.className = "visible";
    showFormBtn.textContent = "Hide Contact";
  } else {
    form.className = "invisible";
    showFormBtn.textContent = "Show Contact";
  }
});