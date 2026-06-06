import { useRef, useEffect, useState } from "react";
import { useInView, animate } from "framer-motion";

export default function AnimatedCounter({
  value,
  duration = 1.5,
  suffix = "",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration,
        ease: "easeOut",
        onUpdate: (latest) => setDisplayValue(Math.round(latest)),
      });
      return controls.stop;
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-display font-bold">
      {displayValue}
      {suffix}
    </span>
  );
}
