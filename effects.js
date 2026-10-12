document.addEventListener("DOMContentLoaded", () => {
  // Smooth reveal animations when scrolling
  const elements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    });

    elements.forEach((element) => observer.observe(element));
  } else {
    elements.forEach((element) => {
      element.classList.add("visible");
    });
  }

  // Water ripple when clicking buttons
  document.querySelectorAll("button, .btn").forEach((button) => {
    button.classList.add("ripple-host");

    button.addEventListener("click", (event) => {
      if (button.disabled) return;

      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;

      const ripple = document.createElement("span");
      ripple.className = "ripple-effect";
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${event.clientY - rect.top - size / 2}px`;

      button.appendChild(ripple);

      ripple.addEventListener("animationend", () => {
        ripple.remove();
      });
    });
  });
});