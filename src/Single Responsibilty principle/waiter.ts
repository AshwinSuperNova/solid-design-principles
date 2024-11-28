import { Order } from "./type";
import { MenuItem } from "./type";

export class WaiterService {
    private activeOrders: Order[] = [];

    takeOrder(tableNumber: number, items: MenuItem[]): Order {
        const order: Order = {
            tableNumber,
            items,
            totalAmount: this.calculateTotal(items),
            status: 'pending'
        };
        this.activeOrders.push(order);
        console.log(`Waiter: Took order for table ${tableNumber}`);
        return order;
    }

    serveOrder(order: Order): void {
        order.status = 'served';
        console.log(`Waiter: Serving order to table ${order.tableNumber}`);
    }

    private calculateTotal(items: MenuItem[]): number {
        return items.reduce((sum, item) => sum + item.price, 0);
    }
}
