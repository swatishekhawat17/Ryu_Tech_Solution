"use client";
import { useEffect } from "react";
import AOS from "aos";

export default function PageWrapper({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return <>{children}</>;
}
