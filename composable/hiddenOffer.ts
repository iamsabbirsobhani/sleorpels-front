// @ts-ignore

export function hiddenOfferDOM(doccument: any, color: any) {
  const hf = document.querySelector(".hidden-offer");
  Array.from(hf?.children ?? []).forEach((child: any) => {
    child.style.color = color;
    child.style.borderColor = color;
  });
}
