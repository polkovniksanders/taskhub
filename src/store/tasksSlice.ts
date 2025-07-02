import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { TaskProps } from '@/shared/interfaces/tasks.interface';
import { generateTasks } from '@/app/dashboard/last-tasks/data/last-tasks.data';

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

export const sortTasks = (tasks: TaskProps[], sortDirection: 'asc' | 'desc'): TaskProps[] => {
  if (sortDirection === 'asc') {
    return [...tasks].sort((a, b) => (a.dueDate ?? 0) - (b.dueDate ?? 0));
  }
  return [...tasks].sort((a, b) => (b.dueDate ?? 0) - (a.dueDate ?? 0));
};

export const selectFilteredTasks = (state: { tasks: TasksState }) => {
  if (state.tasks.filterStatus === 'all') return state.tasks.list;
  return state.tasks.list.filter(t => t.status === state.tasks.filterStatus);
};

export const selectVisibleTasks = (state: { tasks: TasksState }) => {
  const filtered =
    state.tasks.filterStatus === 'all'
      ? state.tasks.list
      : state.tasks.list.filter(t => t.status === state.tasks.filterStatus);
  return sortTasks(filtered, state.tasks.sortDirection);
};

export default tasksSlice.reducer;
