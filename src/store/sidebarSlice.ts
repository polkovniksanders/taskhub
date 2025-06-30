import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@/store/index';

export interface SidebarState {
  isSidebarOpen: boolean;
}

const initialState: SidebarState = {
  isSidebarOpen: true,
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    openSidebar: state => {
      state.isSidebarOpen = true;
    },
    closeSidebar: state => {
      state.isSidebarOpen = false;
    },
    toggleSidebar: state => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const selectSidebarState = (state: RootState): boolean => state.sidebar.isSidebarOpen;

export const { openSidebar, closeSidebar, toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
