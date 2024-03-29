import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import options from "../../app-data/app-data.json";

interface GlobalType {
  openDrawer: boolean;
  value: number;
  accordionItemId: any;
  showNav: boolean;
  showNavDesk: boolean;
  flagUrl: string | any;
  status: string;
  error: string | null | undefined;
  optionOpen: Array<object>;
  options: any;
  openNavOption: boolean;
  activatedOption: number;
  isLoading: boolean;
}

// Define the initial state using that type
const initialState: GlobalType = {
  openDrawer: false,
  value: 10,
  // accordion
  accordionItemId: [] as any,
  // mobile navbar scrol up to show nav
  showNav: true,
  // desktop navbar scrol up to show nav
  showNavDesk: true,
  // geoflag
  flagUrl: null,
  status: "idle",
  error: null as string | null | undefined,
  // options open on mouse over navbar
  optionOpen: [] as Array<object>,
  // nav-men-options section
  options: options["men-nav-options-isopen"],
  openNavOption: false,
  activatedOption: 0,

  // global loading
  isLoading: false,
};

// geo flag
export const fetchFlag = createAsyncThunk("flagUrl/fetchFlag", async () => {
  const response = await fetch(
    "https://api.ipdata.co/?api-key=037253635bedffc03ba3dd3073b737ffdde4fbed82b1abac868bc363"
  );
  const data = await response.json();

  return data;
});

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    // global loading state
    setIsLoading: (state, payload) => {
      state.isLoading = payload.payload;
    },
    // nav-men-options section
    resetActivateOption: (state) => {
      state.activatedOption = 0;
    },
    setOpenNavOption: (state, payload) => {
      state.openNavOption = payload.payload;
    },
    openOption: (state, payload) => {
      state.options.map((item: any) => {
        if (item.id === payload.payload) {
          item.isTrue = true;
          state.activatedOption = item.id;
        } else {
          item.isTrue = false;
        }
      });
    },
    closeOptions: (state) => {
      state.options.map((item: any) => (item.isTrue = false));
      state.activatedOption = 0;
    },
    // options open on mouse over navbar
    setOptionOpen: (state, payload) => {
      state.optionOpen.push(payload.payload);
    },
    // desktop navbar scrol up to show nav
    setShowDeskNav: (state, payload) => {
      state.showNavDesk = payload.payload;
    },
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

  extraReducers(builder) {
    builder
      .addCase(fetchFlag.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchFlag.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched posts to the array
        state.flagUrl = action.payload;
      })
      .addCase(fetchFlag.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
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
  setShowDeskNav,
  setOptionOpen,
  openOption,
  closeOptions,
  setOpenNavOption,
  resetActivateOption,
  setIsLoading,
} = globalSlice.actions;

export default globalSlice.reducer;
