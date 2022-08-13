import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
  name: "global",
  initialState: {
    openDrawer: false,
    value: 10,
    // accordion
    accordionItemId: [] as any,
    // mobile navbar scrol up to show nav
    showNav: true,
  },
  reducers: {
    // mobile navbar scrol up to show nav
    setShowNav: (state, payload) => {
      state.showNav = payload.payload;
    },
    // accordion
    setAccordionItemId: (state, payload: any) => {
      state.accordionItemId.push(payload.payload);
    },
    delAccordionItem: (state, payload: any) => {
      state.accordionItemId.splice(
        state.accordionItemId.indexOf(payload.payload),
        1
      );
    },
    // drawer
    setOpenDrawer: (state, action: PayloadAction<boolean>) => {
      state.openDrawer = action.payload;
    },
    setScroll: () => {
      document.body.style.overflow = "scroll";
    },
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  setOpenDrawer,
  setScroll,
  setAccordionItemId,
  delAccordionItem,
  setShowNav,
} = globalSlice.actions;

export default globalSlice.reducer;
