import { createSlice } from '@reduxjs/toolkit';

interface SidebarState {
  open: boolean;
}

const initialState: SidebarState = {
  open: true,
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    openSidebar: state => {
      state.open = true;
    },
    closeSidebar: state => {
      state.open = false;
    },
    toggleSidebar: state => {
      state.open = !state.open;
    },
  },
});

export const selectSidebarState = (state: { sidebar: SidebarState }) => state.sidebar.open;

export const { openSidebar, closeSidebar, toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
