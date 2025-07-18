import { configureStore } from "@reduxjs/toolkit";
import mobileNavReducer from './slices/mobileNavSlice'
import projectReducer from './slices/projectSlice'

export const store = configureStore({
    reducer: {
        mobileNav: mobileNavReducer,
        projects: projectReducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch