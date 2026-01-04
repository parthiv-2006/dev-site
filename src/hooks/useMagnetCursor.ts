import { useEffect, useRef } from 'react';

type MagnetCursorOptions = {
  selector?: string;
  distance?: number;
};

function useMagnetCursor(options: MagnetCursorOptions = {}) {
  const { selector = '.button, a[href*="#"]', distance = 80 } = options;
  const elementsRef = useRef<Array<{ element: HTMLElement; x: number; y: number }>>([]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(selector)) as HTMLElement[];

    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distX = mouseX - centerX;
        const distY = mouseY - centerY;
        const dist = Math.hypot(distX, distY);

        if (dist < distance) {
          const force = 1 - dist / distance;
          const moveX = (distX / dist) * force * 12;
          const moveY = (distY / dist) * force * 12;

          element.style.transform = `translate(${moveX}px, ${moveY}px)`;
        } else {
          element.style.transform = 'translate(0, 0)';
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [selector, distance]);
}

export default useMagnetCursor;
