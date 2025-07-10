import Card from '@/components/ui/card/Card';
import SubTitle from '@/components/ui/typography/SubTitle';
import Chart from '@/app/dashboard/today-tasks/Chart';

export default function TodayTasks() {
  return (
    <Card>
      <SubTitle title={'Today Tasks'} />
      <Chart />
    </Card>
  );
}
