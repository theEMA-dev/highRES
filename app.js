const targets = Array.from(document.querySelectorAll("a"));
const delayIncrement = 10;
const columns = 6;

const lazyLoad = (target, index) => {
  const img = target.querySelector("img#load");
  const skeleton = target.querySelector(".skeleton");

  if (!img || !skeleton) {
    return;
  }

  const rowIndex = Math.floor(index / columns);
  const columnIndex = index % columns;
  const delay = (rowIndex + columnIndex) * delayIncrement;

  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          const src = img.getAttribute("data-lazy");

          img.setAttribute("src", src);
          img.classList.add('fade');

          skeleton.style.display = 'none';

          observer.disconnect();
        }, delay);
      }
    });
  });

  io.observe(target);
};

targets.forEach(lazyLoad);