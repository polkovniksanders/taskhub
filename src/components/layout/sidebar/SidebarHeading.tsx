interface SidebarHeadingProps {
  title: string;
}
export default function SidebarHeading({ title }: SidebarHeadingProps) {
  return (
    <div className='font-medium mb-1.5 text-neutral-400 dark:text-white opacity-70'>
      {title}
    </div>
  );
}
