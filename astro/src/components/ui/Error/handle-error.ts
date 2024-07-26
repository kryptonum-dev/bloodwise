export const handleError = (element: HTMLSpanElement, text: string) => {
  element.hidden = !text;
  element.querySelector("span").textContent = text;
};
