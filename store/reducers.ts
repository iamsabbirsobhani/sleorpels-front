import { combineReducers } from '@reduxjs/toolkit';

import globalSlice from '../features/global/globalSlice';

const rootReducer = combineReducers({
  global: globalSlice,
});

export default rootReducer;
