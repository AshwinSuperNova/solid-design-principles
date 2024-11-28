import { HostService } from './host';
import { WaiterService } from './waiter';
import { ChefService } from './chef';
import { CashierService } from './cashier';
import { MenuItem } from './type';

class Restaurant {
    private hostService: HostService;
    private waiterService: WaiterService;
    private chefService: ChefService;
    private cashierService: CashierService;

    constructor() {
        this.hostService = new HostService();
        this.waiterService = new WaiterService();
        this.chefService = new ChefService();
        this.cashierService = new CashierService();
    }

    async handleCustomerGroup(numberOfGuests: number, menuItems: MenuItem[]): Promise<void> {
        try {
           
            const tableNumber = this.hostService.seatGuests(numberOfGuests);

            
            const order = this.waiterService.takeOrder(tableNumber, menuItems);

            
            const preparedOrder = await this.chefService.prepareOrder(order);

            
            this.waiterService.serveOrder(preparedOrder);

            
            this.cashierService.processPayment(preparedOrder, 'Credit Card');
            this.cashierService.generateReceipt(preparedOrder);

            
            this.hostService.releaseTable(tableNumber);
        } catch (error: any) {
            console.error('Error in restaurant workflow:', error.message);
        }
    }
}

const restaurant = new Restaurant();

const menuItems: MenuItem[] = [
    { name: 'Pasta', price: 15.99 },
    { name: 'Salad', price: 8.99 },
    { name: 'Wine', price: 12.99 }
];


restaurant.handleCustomerGroup(2, menuItems);