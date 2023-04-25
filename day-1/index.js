window.addEventListener("load", () => {
  const panels = document.querySelectorAll(".panel");

  panels.forEach((it) => {
    it.addEventListener("click", () => {
      removeActiveClasses();
      it.classList.add("active");
    });
  });

  function removeActiveClasses() {
    panels.forEach((it) => it.classList.remove("active"));
  }
});
