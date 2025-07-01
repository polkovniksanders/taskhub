import type { ProfileProps } from '@/shared/interfaces/profile.interface';

export interface SubTaskProps {
  id: string;
  title: string;
  isDone: boolean;
}

export type TaskStatus = 'done' | 'progress' | 'not-start' | 'all';

export interface TaskProps extends Omit<SubTaskProps, 'isDone'> {
  dueDate: number;
  users: ProfileProps[];
  status: TaskStatus;
  subtasks: SubTaskProps[];
  comments: string[];
  resources: string[];
  links: string[];
  start?: number;
  end?: number;
}
