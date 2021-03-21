interface StatsItemType {
  id: number;
  label: string;
  percentage: number;
}

export interface StatsProps {
  title: string;
  items: StatsItemType[];
}
