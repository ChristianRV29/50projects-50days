window.addEventListener("load", () => {
  const searchContainer = document.querySelector(".search");
  const searchButton = document.querySelector(".btn");
  const input = document.querySelector(".input");

  searchButton.addEventListener("click", () => {
    searchContainer.classList.toggle("active");

    input.focus();
  });
});
