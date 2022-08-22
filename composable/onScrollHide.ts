export function hideOnScroll(
  dispatch: any,
  setShowNav: any,
  doc?: any,
  id?: string,
  isWin?: boolean,
  win?: Window
) {
  if (!isWin) {
    const scrl = doc.querySelector(id);
    let previousPosition = 0;

    scrl?.addEventListener("scroll", () => {
      if (scrl.scrollTop > previousPosition) {
        previousPosition = scrl.scrollTop;
        dispatch(setShowNav(false));
      } else {
        dispatch(setShowNav(true));
        previousPosition = scrl.scrollTop;
      }
    });
  }

  if (isWin) {
    let previousPositionWin = 0;
    win?.addEventListener("scroll", () => {
      if (win.scrollY > previousPositionWin) {
        previousPositionWin = win.scrollY;
        dispatch(setShowNav(false));
      } else {
        dispatch(setShowNav(true));
        previousPositionWin = win.scrollY;
      }
    });
  }
}
