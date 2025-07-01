import SubTitle from '@/components/ui/typography/SubTitle';
import LastTasksFilter from '@/app/dashboard/last-tasks/LastTasksFilter';

interface LastTasksTitleProps {
  title: string;
  count: number;
}
export default function LastTasksHeader({ title, count = 0 }: LastTasksTitleProps) {
  return (
    <div className={'flex items-center justify-between mb-4'}>
      <div className={'flex items-center'}>
        <SubTitle title={title} />
        {count && <span className={'opacity-50 font-normal ml-2'}>{count}</span>}
      </div>

      <LastTasksFilter />
    </div>
  );
}
