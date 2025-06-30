import SubTitle from '@/components/ui/typography/SubTitle';

interface LastTasksTitleProps {
  title: string;
  count?: number;
}
export default function LastTasksTitle({ title, count }: LastTasksTitleProps) {
  return (
    <div className={'flex items-center mb-4'}>
      <SubTitle title={title} />
      {count && <span className={'opacity-50 font-normal ml-4'}>{count}</span>}
    </div>
  );
}
