import { useEffect, useRef, useState } from 'react';

type StatCounterProps = {
  value: string | number;
  label: string;
  note?: string;
};

function StatCounter({ value, label, note }: StatCounterProps) {
  const [displayValue, setDisplayValue] = useState('0');
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounter();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounter = () => {
    const valueStr = String(value);
    const isNegative = valueStr.startsWith('-');
    const isPercentage = valueStr.includes('%');
    const numericValue = parseFloat(valueStr.replace(/[^\d.]/g, ''));

    if (isNaN(numericValue)) {
      setDisplayValue(valueStr);
      return;
    }

    const duration = 1200; // ms
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setDisplayValue(valueStr);
        clearInterval(timer);
      } else {
        let formatted = current.toFixed(0);
        if (isNegative) formatted = `-${formatted}`;
        if (isPercentage) formatted = `${formatted}%`;
        setDisplayValue(formatted);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  };

  return (
    <div ref={ref} className="stat-counter">
      <div className="stat-counter__value">{displayValue}</div>
      <div className="stat-counter__label">{label}</div>
      {note ? <div className="stat-counter__note">{note}</div> : null}
    </div>
  );
}

export default StatCounter;
