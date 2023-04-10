import { useEffect, useState } from "react";

export const useSlider = (elements: [Element | null, Element | null]) => {
  const [transitioning, setTransitioning] = useState<boolean>(false);

  useEffect(() => {
    elements[1]?.setAttribute("data-closed", "");
  }, [elements[1]]);

  const viewSecondElement = () => {
    setTransitioning(true);
    elements[1]?.removeAttribute("data-closed");
    elements[0]?.setAttribute("data-transparent", "");
    elements[0]?.addEventListener(
      "animationend",
      () => {
        setTransitioning(false);
        elements[0]?.removeAttribute("data-transparent");
        elements[0]?.setAttribute("data-closed", "");
      },
      { once: true }
    );
  };
  const viewFirstElement = () => {
    setTransitioning(true);
    elements[0]?.removeAttribute("data-closed");
    elements[1]?.setAttribute("data-transparent", "");
    elements[1]?.addEventListener(
      "animationend",
      () => {
        setTransitioning(false);
        elements[1]?.removeAttribute("data-transparent");
        elements[1]?.setAttribute("data-closed", "");
      },
      { once: true }
    );
  };

  return { viewFirstElement, viewSecondElement, transitioning };
};
