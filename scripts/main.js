// GSAP Animations
gsap.to(".fade-img", {
  opacity: 1,
  y: 0,
  duration: 1,
  delay: 0.5,
  ease: "power2.out"
});

gsap.to(".fade-text", {
  opacity: 1,
  y: 0,
  duration: 1,
  delay: 1,
  ease: "power2.out"
});

gsap.to(".car-img", {
  scrollTrigger: {
    trigger: ".car-slide",
    start: "top center",
    end: "bottom center",
    scrub: true,
  },
  x: window.innerWidth + 200,
  ease: "power3.out",
  duration: 3,
});

gsap.to(".fade-bio", {
  scrollTrigger: {
    trigger: ".bio-section",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true,
  },
  opacity: 1,
  y: 0,
  duration: 2,
  ease: "power2.out"
});

// Custom Cursor
const cursor = document.getElementById('cursor');
window.addEventListener('mousemove', e => {
  cursor.style.top = e.clientY + 'px';
  cursor.style.left = e.clientX + 'px';
});

window.addEventListener('mousedown', () => {
  cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
});

window.addEventListener('mouseup', () => {
  cursor.style.transform = "translate(-50%, -50%) scale(1)";
});
