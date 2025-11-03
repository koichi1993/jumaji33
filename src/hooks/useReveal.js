import { useEffect, useRef, useState } from "react";

export function useReveal(threshold = 0.2) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setOn(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, on };
}
