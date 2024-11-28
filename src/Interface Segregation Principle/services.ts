import { ICallingService, IDataService, IInternationalService, IEntertainmentService } from "./plan-interfaces";

export class BasicCallingService implements ICallingService {
    makeCall(number: string): void {
        console.log(`Making call to ${number}`);
    }

    receiveCall(number: string): void {
        console.log(`Receiving call from ${number}`);
    }
}

export class DataService implements IDataService {
    private dataBalance: number = 1000; // 1GB

    useData(megabytes: number): void {
        this.dataBalance -= megabytes;
        console.log(`Used ${megabytes}MB of data`);
    }

    checkDataBalance(): number {
        console.log(`Remaining data: ${this.dataBalance}MB`);
        return this.dataBalance;
    }
}

export class InternationalService implements IInternationalService {
    makeInternationalCall(country: string, number: string): void {
        console.log(`Making international call to ${country}: ${number}`);
    }
}

export class EntertainmentService implements IEntertainmentService {
    streamMedia(service: string): void {
        console.log(`Streaming content from ${service}`);
    }

    downloadContent(contentId: string): void {
        console.log(`Downloading content ID: ${contentId}`);
    }
}