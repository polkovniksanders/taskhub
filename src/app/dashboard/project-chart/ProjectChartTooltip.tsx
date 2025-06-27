interface ProjectChartTooltipProps {
  active?: boolean;
  payload?: Payload[];
}

type Payload = {
  value: number;
};

export default function ProjectChartTooltip({ active, payload = [] }: ProjectChartTooltipProps) {
  if (!active || payload.length === 0) return null;

  return (
    <div className={'bg-primary text-white text-sm text-medium py-1.5 px-2.5 rounded-2xl'}>
      {payload[0].value} Projects
    </div>
  );
}
