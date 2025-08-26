import { useEffect, useRef, useState } from "react";

// LazyLoadSection: loads/animates children only when visible, keeps mounted after first load
const LazyLoadSection = ({ children }) => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasLoaded(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -60px 0px",
      }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : "translateY(24px)",
        transition: "opacity 0.5s cubic-bezier(.4,0,.2,1), transform 0.5s cubic-bezier(.4,0,.2,1)",
        willChange: "opacity, transform",
      }}
    >
      {hasLoaded ? children : null}
    </div>
  );
};

export default LazyLoadSection;
