
export enum Role {
  Admin = 'Admin',
  Ops = 'Ops',
  CallAgent = 'Call/Confirmation Agent',
  DeliveryLead = 'Delivery Lead',
  Viewer = 'Viewer',
}

export enum OrderStatus {
  Created = 'created',
  Confirmed = 'confirmed',
  DeliveredFull = 'delivered_full',
  DeliveredPartial = 'delivered_partial',
  Canceled = 'canceled',
  CancelRequestAccepted = 'cancel_request_accepted',
  CancelRequestRecent = 'cancel_request_recent',
  OnHold = 'on_hold',
  FollowUp = 'follow_up',
}

export interface Employee {
  id: number;
  name: string;
  phone: string;
  email: string;
  role: Role;
  isActive: boolean;
  avatarUrl: string;
  stats: {
    deliveriesCompleted: number;
    cancelRequestsAccepted: number;
    itemsOnHold: number;
    zoneChanges: number;
    confirmations: number;
    codChanges: number;
  };
}

export interface Order {
  id: string;
  externalOrderId: string;
  customerName: string;
  customerPhone: string;
  address: string;
  zone: string;
  status: OrderStatus;
  codAmount: number;
  createdAt: string;
  updatedAt: string;
  actorEmployeeId: number;
}

export interface KpiData {
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
  icon: React.ElementType;
}

export interface OrdersByDay {
  date: string;
  orders: number;
  delivered: number;
  canceled: number;
}
