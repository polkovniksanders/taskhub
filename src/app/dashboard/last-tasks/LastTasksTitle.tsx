interface LastTasksTitleProps {
  title: string;
  count?: number;
}
export default function LastTasksTitle({ title, count }: LastTasksTitleProps) {
  return (
    <h2 className={'text-xl font-medium mb-2'}>
      {title}
      {count && <span className={'opacity-50 font-normal ml-4'}>{count}</span>}
    </h2>
  );
}
