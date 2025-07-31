document.addEventListener("DOMContentLoaded", function () {
  // Toggle dropdowns on click for mobile
  const dropdowns = document.querySelectorAll(".dropdown > a");

  dropdowns.forEach((dropdownLink) => {
    dropdownLink.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent redirect
      const menu = this.nextElementSibling;

      // Close other open dropdowns
      document.querySelectorAll(".dropdown-menu").forEach((el) => {
        if (el !== menu) el.classList.remove("show");
      });

      // Toggle this dropdown
      menu.classList.toggle("show");
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".dropdown")) {
      document.querySelectorAll(".dropdown-menu").forEach((menu) => {
        menu.classList.remove("show");
      });
    }
  });
});
