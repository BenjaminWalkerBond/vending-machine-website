import { useRef, useEffect } from 'react';

export function useFadeInOnScroll(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    node.classList.add('fade-in-up-init');
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('fade-in-up');
          observer.disconnect();
        }
      },
      { threshold: 0.2, ...options }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return ref;
}
