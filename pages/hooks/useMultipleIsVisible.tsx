import { useEffect, useRef, useState } from "react";

type UseMultipleIsVisibleReturn = {
  refArray: React.RefObject<HTMLDivElement>[];
  isVisibleArray: boolean[];
};

export function useMultipleIsVisible(
  count: number
): UseMultipleIsVisibleReturn {
  const refArray = Array.from({ length: count }, () =>
    useRef<HTMLDivElement>(null)
  );
  const isVisibleArray = refArray.map((ref) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) =>
        setIsVisible(entry.isIntersecting)
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [ref]);

    return isVisible;
  });

  return { refArray, isVisibleArray };
}
