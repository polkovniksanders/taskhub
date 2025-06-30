interface SubTitle {
  title: string;
}
export default function SubTitle({ title }: SubTitle) {
  return <h2 className='text-xl font-medium'>{title}</h2>;
}
