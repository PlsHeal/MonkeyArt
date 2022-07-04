import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    color: '#000000'
}

export const NavbarSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        changeColor: (state, action) => {
            state.color = action.payload;
        }
    }
});

export const { changeColor } = NavbarSlice.actions;

export const selectColor = (state) => state.nav.color;

export default NavbarSlice.reducer;