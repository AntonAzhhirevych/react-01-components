interface PricingPlanItemType {
  description: string;
  label: string;
  img: string;
  icon: string;
  capacity: string;
  price: number;
}

export interface PricingPlanProps {
  items: PricingPlanItemType[];
}
