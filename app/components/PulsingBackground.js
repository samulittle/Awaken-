"use client";
import { useEffect, useState } from "react";
import styles from "./PulsingBackground.module.css";

export default function PulsingBackground() {
  const [pulseState, setPulseState] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseState((prev) => (prev + 1) % 6);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${styles.background} ${styles[`pulse${pulseState}`]}`}>
      <div className={styles.overlay}></div>
    </div>
  );
}
