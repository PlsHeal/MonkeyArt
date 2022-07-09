import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAccountHistory } from './BananoAPI';

const initialState = {
  save: false,
  horizontal: 0,
  vertical: 0,
};

export const fetchAccountHistoryAsync = createAsyncThunk(
  'pixelboard/fetchAccountHistory',
  async (account) => {
    const response = await fetchAccountHistory(account);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const pixelboardSlice = createSlice({
  name: 'pixelboard',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    pixelSave: (state, action) => {
      state.save = action.payload;
    },
    cellPixelX: (state, action) => {
      state.horizontal = action.payload;
    },
    cellPixelY: (state, action) => {
      state.vertical = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAccountHistoryAsync.pending, (state) => {
      })
      .addCase(fetchAccountHistoryAsync.fulfilled, (state, action) => {
      });
  },
});

export const { pixelSave, cellPixelX, cellPixelY } = pixelboardSlice.actions;
export const canvasSave = (state) => state.pixelboard.save;
export const selectCellPixelX = (state) => state.pixelboard.horizontal;
export const selectCellPixelY = (state) => state.pixelboard.vertical;

export default pixelboardSlice.reducer;
