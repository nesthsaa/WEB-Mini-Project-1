document.addEventListener('DOMContentLoaded', function () {
    const typedElements = document.getElementsByClassName('typed-element');
    for (let i = 0; i < typedElements.length; i++) {
      const typed = new Typed(typedElements[i], {
        strings: [typedElements[i].textContent],
        typeSpeed: 50,
        backSpeed: 0,
        loop: false,
        showCursor: false,
      });
    }
  });
