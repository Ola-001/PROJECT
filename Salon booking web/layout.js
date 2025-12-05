// Load Header
// Load Header
fetch("header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    // Fix mobile menu bug after header loads
    const menuToggle = document.getElementById("menu-toggle");
    window.addEventListener("resize", function () {
      if (window.innerWidth > 700) {
        menuToggle.checked = false;
      }
    });
  });

// Load Footer
fetch("footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });

// Load Footer
fetch("cart.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("cart").innerHTML = data;
  });

// Load Footer
fetch("check-out.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("check-out").innerHTML = data;
  });

// Load Footer
fetch("create-account.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("create-account").innerHTML = data;
  });

fetch("Profile.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("create-account").innerHTML = data;
  });

// Smooth Scroll when clicking "Contact"
document.addEventListener("click", function(e) {
  if (e.target.matches(".contact-link")) {
    e.preventDefault();

    // Wait a moment for footer to load (fetch)
    setTimeout(() => {
      const contactSection = document.getElementById("contactSection");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  }
});


window.addEventListener("resize", function () {
  const menuToggle = document.getElementById("menu-toggle");

  // If screen is wider than 700px (desktop mode)
  if (window.innerWidth > 700) {
    menuToggle.checked = false;  // Reset mobile menu
  }
});
