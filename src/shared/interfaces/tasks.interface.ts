import type { LucideIcon } from 'lucide-react';
import type { ProfileProps } from '@/shared/interfaces/profile.interface';

export interface SubTaskProps {
  id: string;
  title: string;
  isDone: boolean;
}

export interface TaskProps extends Omit<SubTaskProps, 'isDone'> {
  icon: LucideIcon;
  dueDate: Date;
  users: ProfileProps[];
  subtasks: SubTaskProps[];
  comments: string[];
  resources: string[];
  links: string[];
  start?: number;
  end?: number;
}
