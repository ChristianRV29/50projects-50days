const leftSection = document.querySelector(".left");
const rightSection = document.querySelector(".right");

const container = document.querySelector(".container");

leftSection.addEventListener("mouseenter", () =>
  container.classList.add("hover-left")
);

leftSection.addEventListener("mouseleave", () =>
  container.classList.remove("hover-left")
);

rightSection.addEventListener("mouseenter", () =>
  container.classList.add("hover-right")
);

rightSection.addEventListener("mouseleave", () =>
  container.classList.remove("hover-right")
);
