interface TransactionHistoryItemType {
  type: string;
  id: string;
  amount: string;
  currency: string;
}

export interface TransactionHistoryProps {
  items: TransactionHistoryItemType[];
}
