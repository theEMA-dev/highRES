const targets=document.querySelectorAll("#shown"),lazyLoad=e=>{new IntersectionObserver((e,t)=>{console.log(e),e.forEach(e=>{if(console.log("lazyLoaded"),e.isIntersecting){const o=e.target,s=o.getAttribute("data-lazy");o.setAttribute("src",s),o.classList.add("fade"),t.disconnect()}})}).observe(e)};targets.forEach(lazyLoad);