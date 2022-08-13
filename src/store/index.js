import { configureStore , createSlice } from '@reduxjs/toolkit';

const initialThemeState = {
    isDark : true,
    isLight : false
};

const themeSlice = createSlice({
    name: 'theme',
    initialState: initialThemeState,
    reducers: {
        setToDark(state){
            state.isDark = true;
            state.isLight = false;
        },
        setToLight(state){
            state.isLight = true;
            state.isDark = false;
        }
    }
});


const store = configureStore({
    reducer: {
        theme: themeSlice.reducer
    }
});

export const themeActions = themeSlice.actions;
export default store;