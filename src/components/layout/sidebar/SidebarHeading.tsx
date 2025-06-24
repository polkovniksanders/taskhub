interface SidebarHeadingProps {
  title: string;
}
export default function SidebarHeading({ title }: SidebarHeadingProps) {
  return (
    <div className='font-medium mb-1.5 opacity-70 text-neutral-400 dark:text-white'>
      {title}
    </div>
  );
}
