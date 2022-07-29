import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "../features/global/globalSlice";

export default configureStore({
  reducer: {
    global: globalSlice,
  },
});
