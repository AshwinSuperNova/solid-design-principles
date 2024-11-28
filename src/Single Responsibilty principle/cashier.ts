import { Order } from "./type";

export class CashierService {
    processPayment(order: Order, paymentMethod: string): void {
        console.log(`Cashier: Processing payment of $${order.totalAmount}`);
        console.log(`Cashier: Payment method - ${paymentMethod}`);
        order.status = 'paid';
    }

    generateReceipt(order: Order): void {
        console.log(`Cashier: Generated receipt for table ${order.tableNumber}`);
        console.log(`Items: ${order.items.map(item => item.name).join(', ')}`);
        console.log(`Total: $${order.totalAmount}`);
    }
}