export function getDueDateColor(dueDate: number): string {
  if (dueDate < 2) return 'text-red-500';
  if (dueDate >= 2 && dueDate <= 10) return 'text-yellow-500';
  return 'text-green-500';
}
