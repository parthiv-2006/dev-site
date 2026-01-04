import { useRef, useEffect, useState } from 'react';

type ProcessDiagramProps = {
  steps: Array<{ title: string; detail: string }>;
};

function ProcessDiagram({ steps }: ProcessDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="process-diagram">
      <svg
        ref={svgRef}
        className="process-diagram__svg"
        viewBox="0 0 1000 200"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        {/* Connecting lines */}
        <line
          x1="150"
          y1="100"
          x2="450"
          y2="100"
          className={`process-diagram__line ${isVisible ? 'process-diagram__line--draw' : ''}`}
          style={{ '--draw-delay': '0.2s' } as React.CSSProperties & { '--draw-delay': string }}
        />
        <line
          x1="550"
          y1="100"
          x2="850"
          y2="100"
          className={`process-diagram__line ${isVisible ? 'process-diagram__line--draw' : ''}`}
          style={{ '--draw-delay': '0.4s' } as React.CSSProperties & { '--draw-delay': string }}
        />

        {/* Nodes */}
        {steps.map((_, index) => {
          const x = 150 + index * 350;
          return (
            <g
              key={index}
              className={`process-diagram__node ${isVisible ? 'process-diagram__node--reveal' : ''}`}
              style={{ '--node-delay': `${index * 0.15}s` } as React.CSSProperties & { '--node-delay': string }}
            >
              <circle cx={x} cy="100" r="28" className="process-diagram__node-circle" />
              <text
                x={x}
                y="100"
                className="process-diagram__node-text"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                {index + 1}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="process-diagram__content">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`process-diagram__step ${isVisible ? 'process-diagram__step--reveal' : ''}`}
            style={{ '--step-delay': `${0.15 + index * 0.15}s` } as React.CSSProperties & { '--step-delay': string }}
          >
            <h4 className="process-diagram__step-title">{step.title}</h4>
            <p className="process-diagram__step-detail">{step.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProcessDiagram;
