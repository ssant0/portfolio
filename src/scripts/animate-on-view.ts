

/**
 * Animate elements when they enter the viewport without external animation libraries.
 * Usage:
 *  - Add `animate-on-view` class to the element.
 *  - Add `data-aov-animation` attribute with the animate.css classname (e.g., 'animate__fadeIn').
 * @param {IntersectionObserverInit} [options] - Optional observer settings: root, rootMargin, threshold.
 */
export const startAnimateOnView = (options = { root: null, rootMargin: '50px 0px 0px 0px', threshold: 0.0 }) => {
  const elements = document.querySelectorAll<HTMLElement>('.animate-on-view');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      
      const el = entry.target as HTMLElement;
      obs.unobserve(el); // Stop observing once animated
      
      const animation = el.getAttribute('data-aov-animation');
      if (!animation) {
        console.warn(`Element missing 'data-aov-animation':`, el);
        obs.unobserve(el);
        return;
      }

      el.classList.add(animation);
    });
  }, options);

  elements.forEach(el => observer.observe(el));
};


