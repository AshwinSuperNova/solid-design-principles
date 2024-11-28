import { Order } from "./type";

export class ChefService {
    prepareOrder(order: Order): Promise<Order> {
        return new Promise((resolve) => {
            console.log(`Chef: Starting preparation for table ${order.tableNumber}`);
            order.status = 'preparing';
            

            setTimeout(() => {
                order.status = 'ready';
                console.log(`Chef: Order ready for table ${order.tableNumber}`);
                resolve(order);
            }, 2000);
        });
    }
}