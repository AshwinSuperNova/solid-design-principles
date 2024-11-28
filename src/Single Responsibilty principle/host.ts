interface Table {
    number: number;
    seats: number;
    isOccupied: boolean;
}

export class HostService {
    private tables: Table[] = [
        { number: 1, seats: 2, isOccupied: false },
        { number: 2, seats: 4, isOccupied: false },
        { number: 3, seats: 6, isOccupied: false }
    ];

    seatGuests(numberOfGuests: number): number {
        const availableTable = this.findSuitableTable(numberOfGuests);
        if (!availableTable) {
            throw new Error('No suitable table available');
        }

        availableTable.isOccupied = true;
        console.log(`Host: Seated ${numberOfGuests} guests at table ${availableTable.number}`);
        return availableTable.number;
    }

    private findSuitableTable(numberOfGuests: number): Table | undefined {
        return this.tables.find(table => 
            !table.isOccupied && table.seats >= numberOfGuests
        );
    }

    releaseTable(tableNumber: number): void {
        const table = this.tables.find(t => t.number === tableNumber);
        if (table) {
            table.isOccupied = false;
            console.log(`Host: Table ${tableNumber} is now available`);
        }
    }
}
