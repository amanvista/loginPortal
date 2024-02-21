import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';

const store = configureStore({
    reducer: {
        auth: authSlice,
    },
});

const rootReducer = (state, action) => {
    return {
        auth: authSlice(state.auth, action),
        // Add other reducers here if needed
    };
};

export default store;
