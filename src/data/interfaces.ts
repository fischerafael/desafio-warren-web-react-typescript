export interface ITransactionResponse {
  id: string;
  title: string;
  description: string;
  status: string;
  amount: number;
  date?: string;
  from?: string;
  to?: string;
}

export type IStatus = "processed" | "created" | "processing";
