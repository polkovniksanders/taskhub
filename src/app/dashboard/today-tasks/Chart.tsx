import {
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import Task from '@/app/dashboard/last-tasks/Task';
import type { TooltipProps } from 'recharts';
import type { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import type { TaskProps } from '@/shared/interfaces/tasks.interface';
import { useAppSelector } from '@/store';
import { selectVisibleTasks } from '@/store/tasksSlice';

const CustomTooltip = (props: TooltipProps<ValueType, NameType>) => {
  if (
    props.active &&
    'payload' in props &&
    Array.isArray(props.payload) &&
    props.payload.length > 0 &&
    props.payload[0] &&
    'payload' in props.payload[0] &&
    props.payload[0].payload
  ) {
    const tooltip = props.payload[0].payload as { task: TaskProps };

    return <Task task={tooltip.task} />;
  }
  return null;
};

export default function Chart() {
  const tasks = useAppSelector(selectVisibleTasks);
  const data = tasks.map(task => ({
    x: task.dueDate,
    y: task.subtasks.length,
    z: task.users.length,
    task: task,
  }));

  return (
    <ResponsiveContainer width='100%' height={400}>
      <ScatterChart
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis type='number' dataKey='x' name='due date' unit='d' />
        <YAxis type='number' dataKey='y' name='count' unit='qty' />
        <Tooltip content={CustomTooltip} cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name='Tasks' data={data} fill='#8884d8' />
      </ScatterChart>
    </ResponsiveContainer>
  );
}
