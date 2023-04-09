import { useEffect } from "react";

export const useSlider = (elements: [Element | null, Element | null]) => {
  useEffect(() => {
    elements[1]?.setAttribute("data-closed", "");
    console.log(elements[1], "setting closed");
  }, [elements[1]]);

  const viewSecondElement = () => {
    elements[1]?.removeAttribute("data-closed");
    elements[0]?.setAttribute("data-transparent", "");
    elements[0]?.addEventListener(
      "animationend",
      () => {
        elements[0]?.removeAttribute("data-transparent");
        elements[0]?.setAttribute("data-closed", "");
      },
      { once: true }
    );
  };
  const viewFirstElement = () => {
    elements[0]?.removeAttribute("data-closed");
    elements[1]?.setAttribute("data-transparent", "");
    elements[1]?.addEventListener(
      "animationend",
      () => {
        elements[1]?.removeAttribute("data-transparent");
        elements[1]?.setAttribute("data-closed", "");
      },
      { once: true }
    );
  };

  return { viewFirstElement, viewSecondElement };
};
