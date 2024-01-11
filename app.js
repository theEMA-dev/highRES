const targets = document.querySelectorAll("a");

const lazyLoad = target => {
  const img = target.querySelector("img#load");
  const skeleton = target.querySelector(".skeleton");

  // Check if the img and skeleton exist before proceeding
  if (!img || !skeleton) {
    return;
  }

  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const src = img.getAttribute("data-src");

        img.setAttribute("src", src);
        img.style.display = 'block'; // Show the image

        skeleton.style.display = 'none'; // Hide the skeleton

        observer.disconnect();
      }
    });
  });

  io.observe(target);
};

targets.forEach(lazyLoad);