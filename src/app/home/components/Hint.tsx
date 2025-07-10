import SubTitle from '@/components/ui/typography/SubTitle';

export default function Hint() {
  return (
    <div className={'bg-primary fixed bottom-0 left-0 w-full  p-4 text-center text-sm'}>
      <SubTitle title={'Password is 12345678 for test user. Any name and email can be used.'} />
    </div>
  );
}
