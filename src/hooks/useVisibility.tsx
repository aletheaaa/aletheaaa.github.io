import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

const useVisibility = (section: string) => {
  const dispatch = useDispatch();
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          dispatch({ type: section });
        }
      },
      { threshold: 0.3 } // Adjust the threshold as needed
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [dispatch, section]);

  return targetRef;
};

export default useVisibility;
