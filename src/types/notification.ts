export interface Notification {
  id: string;
  title: string;
  message: string;
  type: string;
  read: boolean;
  timestamp: string;
  actionUrl?: string;
}