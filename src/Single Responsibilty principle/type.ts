

export interface Order {
    tableNumber: number;
    items: MenuItem[];
    totalAmount: number;
    status: OrderStatus;
}

export interface MenuItem {
    name: string;
    price: number;
}

export type OrderStatus = 'pending' | 'preparing' | 'ready' | 'served' | 'paid';