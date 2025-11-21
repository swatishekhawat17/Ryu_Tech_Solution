"use client";
import { useEffect } from "react";
import AOS from "aos";

export default function PageWrapper({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 400,
      once: true,
    });
  }, []);

  return <>{children}</>;
}
