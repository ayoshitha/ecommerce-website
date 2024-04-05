document.addEventListener("DOMContentLoaded", function () {
  const filterLinks = document.querySelectorAll("#filters a");
  const products = document.querySelectorAll(".product");

  filterLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const selectedCategory = this.getAttribute("data-category");

      products.forEach((product) => {
        const productCategory = product.getAttribute("data-category");

        if (
          selectedCategory === "all" ||
          selectedCategory === productCategory
        ) {
          product.style.display = "block";
        } else {
          product.style.display = "none";
        }
      });
    });
  });
});
