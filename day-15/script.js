const counters = document.querySelectorAll('.counter')

counters.forEach((counterElement) => {
  counterElement.innerText = '0'

  const updateCounter = () => {
    const target = +counterElement.getAttribute('data-target')
    const currentCounter = +counterElement.innerText

    const increment = target / 200

    if (currentCounter < target) {
      counterElement.innerText = `${Math.ceil(currentCounter + increment)}`
      setTimeout(updateCounter, 1)
    } else {
      counterElement.innerText = target
    }
  }

  updateCounter()
})
