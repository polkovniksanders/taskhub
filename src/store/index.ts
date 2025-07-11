import { configureStore } from '@reduxjs/toolkit';
import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import sidebarReducer from './sidebarSlice';
import tasksReducer from './tasksSlice';
import userReducer from './userSlice';
import projectChart from './projectsSlice';

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    tasks: tasksReducer,
    user: userReducer,
    projectChart: projectChart,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
