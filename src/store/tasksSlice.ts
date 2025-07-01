import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { TaskProps } from '@/shared/interfaces/tasks.interface';
import { generateTasks } from '@/app/dashboard/last-tasks/data/last-tasks.data';

interface TasksState {
  list: TaskProps[];
  filterStatus: string;
}

const initialState: TasksState = {
  list: generateTasks(20),
  filterStatus: 'all',
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
  },
});

export const { setStatusFilter, setTasks } = tasksSlice.actions;

export const selectFilteredTasks = (state: { tasks: TasksState }) => {
  if (state.tasks.filterStatus === 'all') return state.tasks.list;
  return state.tasks.list.filter(t => t.status === state.tasks.filterStatus);
};

export default tasksSlice.reducer;
