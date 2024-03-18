document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const image = entry.target;
          image.style.backgroundImage = `url('${image.dataset.src}')`;
          observer.unobserve(image);
        }
      });
    }, {
      rootMargin: '0px',
      threshold: 0.1
    });
  
    document.querySelectorAll('.image').forEach(image => {
      observer.observe(image);
    });
  });
  