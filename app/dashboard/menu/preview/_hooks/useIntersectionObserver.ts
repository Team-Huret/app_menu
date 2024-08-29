import { useEffect, useRef } from "react";

export function useIntersectionObserver(
  setState: (state: string) => void,
  sectionRefs: React.MutableRefObject<{ [key: string]: HTMLElement | null }>
) {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setState(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.current?.observe(section);
    });

    return () => {
      Object.values(sectionRefs.current).forEach((section) => {
        if (section) observer.current?.unobserve(section);
      });
    };
  }, []);

  return observer;
}
