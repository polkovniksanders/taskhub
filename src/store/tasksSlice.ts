import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { TaskProps } from '@/shared/interfaces/tasks.interface';
import { generateTasks } from '@/app/dashboard/last-tasks/data/last-tasks.data';
import { createSelector } from 'reselect';
import type { RootState } from '@/store/index';

interface TasksState {
  list: TaskProps[];
  filterStatus: string;
  sortDirection: 'asc' | 'desc';
}

const initialState: TasksState = {
  list: generateTasks(20),
  filterStatus: 'all',
  sortDirection: 'desc',
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setStatusFilter(state, action: PayloadAction<string>) {
      state.filterStatus = action.payload;
    },
    setTasks(state, action: PayloadAction<TaskProps[]>) {
      state.list = action.payload;
    },
    setSortDirection(state, action: PayloadAction<'asc' | 'desc'>) {
      state.sortDirection = action.payload;
    },
  },
});

export const { setStatusFilter, setTasks, setSortDirection } = tasksSlice.actions;

export const selectTasksState = (state: RootState) => state.tasks;

export const selectVisibleTasks = createSelector([selectTasksState], tasksState => {
  const filtered =
    tasksState.filterStatus === 'all'
      ? tasksState.list
      : tasksState.list.filter(t => t.status === tasksState.filterStatus);
  return tasksState.sortDirection === 'asc'
    ? [...filtered].sort((a, b) => (a.dueDate ?? 0) - (b.dueDate ?? 0))
    : [...filtered].sort((a, b) => (b.dueDate ?? 0) - (a.dueDate ?? 0));
});

export const selectTaskById = createSelector(
  [(state: RootState) => state.tasks.list, (_: RootState, id: string) => id],
  (list, id) => list.find(task => task.id === id),
);

export default tasksSlice.reducer;
