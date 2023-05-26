window.addEventListener("load", () => {
  const background = document.querySelector(".bg");
  const loadText = document.querySelector(".loading-text");

  let loadPercentaje = 0;

  const intervalId = setInterval(blurring, 30);

  function blurring() {
    loadPercentaje++;

    if (loadPercentaje > 99) clearInterval(intervalId);

    loadText.innerText = `${loadPercentaje}%`;
    loadText.style.opacity = scale(loadPercentaje, 0, 100, 1, 0);
    background.style.filter = `blur(${scale(loadPercentaje, 0, 100, 30, 0)}px)`;
  }
  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };
});
