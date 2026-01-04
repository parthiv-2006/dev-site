import { useEffect } from 'react';

function useScrollStagger() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = Array.from(entry.target.children) as HTMLElement[];
            children.forEach((child, index) => {
              const delay = index * 0.08;
              child.style.animationDelay = `${delay}s`;
              child.classList.add('stagger-reveal');
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all section grids
    const grids = document.querySelectorAll('.section__grid--two');
    grids.forEach((grid) => observer.observe(grid));

    return () => observer.disconnect();
  }, []);
}

export default useScrollStagger;
