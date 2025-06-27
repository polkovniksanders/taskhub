import type { TaskProps } from '@/shared/interfaces/tasks.interface';
import { ShoppingBasket, Plane, Umbrella } from 'lucide-react';
import { generateUsers } from '@/app/users.data';

export const TASKS: TaskProps[] = [
  {
    id: '1',
    title: 'Some Title 1',
    dueDate: new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000),
    comments: ['comment 1', 'comment 2', 'comment 3'],
    resources: [''],
    links: ['http://localhost:8080/dashboard', 'http://localhost:8080/dashboard'],
    icon: Plane,
    users: generateUsers(3, 6),
    subtasks: [
      {
        id: '1',
        title: 'subtask 1',
        isDone: true,
      },
    ],
  },

  {
    id: '2',
    title: 'Some Title 2',
    dueDate: new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000),
    comments: ['1', '2', '3'],
    resources: ['', '', '', ''],
    links: [''],
    icon: ShoppingBasket,
    users: generateUsers(2, 8),
    subtasks: [
      {
        id: '1',
        title: 'subtask 1',
        isDone: false,
      },
      {
        id: '1',
        title: 'subtask 1',
        isDone: true,
      },
    ],
  },

  {
    id: '3',
    title: 'Some Title 3',
    dueDate: new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000),
    comments: ['1', '3'],
    resources: ['', '', ''],
    links: [''],
    icon: Umbrella,
    users: generateUsers(4, 10),
    subtasks: [
      {
        id: '1',
        title: 'subtask 1',
        isDone: true,
      },
      {
        id: '2',
        title: 'subtask 2',
        isDone: true,
      },
      {
        id: '3',
        title: 'subtask 3',
        isDone: true,
      },
    ],
  },
];
