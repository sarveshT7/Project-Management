import { createSlice } from "@reduxjs/toolkit";

interface MobileNavState {
    isSidebarVisible: boolean;
    isHeaderVisible: boolean;
}
const initialState: MobileNavState = {
    isSidebarVisible: false,
    isHeaderVisible: true
}

const mobNavSlice = createSlice({
    name: 'mobileNav',
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.isSidebarVisible = !state.isSidebarVisible;
            state.isHeaderVisible = !state.isHeaderVisible;
        },
        closeSidebar: (state) => {
            state.isHeaderVisible = true;
            state.isSidebarVisible = false;
        },
        openSidebar: (state) => {
            state.isHeaderVisible = false;
            state.isSidebarVisible = true
        }
    }
})
export const { toggleSidebar, openSidebar, closeSidebar } = mobNavSlice.actions;
export default mobNavSlice.reducer