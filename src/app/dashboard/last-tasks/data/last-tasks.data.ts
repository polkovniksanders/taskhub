import { generateUsers } from '@/app/users.data';
import type { DropdownProps } from '@/shared/interfaces/commone.interface';

export const filters: DropdownProps[] = [
  { label: 'Done', value: 'done' },
  { label: 'In Progress', value: 'progress' },
  { label: 'Not start', value: 'not-start' },
  { label: 'All', value: 'all' },
];

const statuses = ['done', 'progress', 'not-start'] as const;

export const generateTasks = (count: number) => {
  return Array.from({ length: count }, (_, i) => {
    const status = statuses[i % statuses.length];

    const subtaskCount = Math.floor(Math.random() * 12) + 1;

    const subtasks = Array.from({ length: subtaskCount }, (_, j) => ({
      id: `${j + 1}`,
      title: `subtask ${j + 1}`,
      isDone: Math.random() > 0.5,
    }));

    const dueDate = Math.floor(Math.random() * 30) + 1;

    return {
      id: `${i + 1}`,
      title: `Current task #${i + 1}`,
      dueDate,
      comments: Array((i % 4) + 1).fill('Комментарий'),
      resources: Array((i % 3) + 1).fill(''),
      status,
      links: ['http://localhost:8080/dashboard'],
      users: generateUsers((i % 5) + 2, 10),
      start: 9 + (i % 5),
      end: 10 + (i % 6),
      subtasks,
    };
  });
};
