import { useEffect, useState } from "react";

export function useScrollSpy(refs) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry.isIntersecting);
          if (entry.isIntersecting) {
            console.log("entry ud", entry.target.id);
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px", // Adjusts when the section is considered "active"
        threshold: 0.1, // Trigger when at least 10% of the section is visible
      }
    );

    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [refs]);

  return activeSection;
}
