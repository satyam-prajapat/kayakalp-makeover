import { useEffect, useRef, useState } from "react";

function Reveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const directionClass = {
    up: "reveal",
    left: "reveal-left",
    right: "reveal-right",
    scale: "reveal-scale",
  };

  return (
    <div
      ref={ref}
      className={`${directionClass[direction]} ${
        visible ? "show" : ""
      } ${className}`}
      style={{
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export default Reveal;