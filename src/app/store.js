import { configureStore } from '@reduxjs/toolkit';
import pixelboardReducer from '../features/board/PixelboardSlice';
import navReducer from '../features/nav-menu/NavbarSlice';

export const store = configureStore({
  reducer: {
    pixelboard: pixelboardReducer,
    nav: navReducer
  }
});
