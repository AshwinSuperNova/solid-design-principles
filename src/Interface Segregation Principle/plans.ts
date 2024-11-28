import { ICallingService, IDataService, IEntertainmentService, IInternationalService } from "./plan-interfaces";
import { BasicCallingService } from "./services";
import { DataService } from "./services";
import { InternationalService } from "./services";
import { EntertainmentService } from "./services";

export class BasicPlan implements ICallingService {
    private callingService: BasicCallingService;

    constructor() {
        this.callingService = new BasicCallingService();
    }

    makeCall(number: string): void {
        this.callingService.makeCall(number);
    }

    receiveCall(number: string): void {
        this.callingService.receiveCall(number);
    }
}

export class DataPlan implements ICallingService, IDataService {
    private callingService: BasicCallingService;
    private dataService: DataService;

    constructor() {
        this.callingService = new BasicCallingService();
        this.dataService = new DataService();
    }

    makeCall(number: string): void {
        this.callingService.makeCall(number);
    }

    receiveCall(number: string): void {
        this.callingService.receiveCall(number);
    }

    useData(megabytes: number): void {
        this.dataService.useData(megabytes);
    }

    checkDataBalance(): number {
        return this.dataService.checkDataBalance();
    }
}

export class PremiumPlan implements ICallingService, IDataService, IInternationalService, IEntertainmentService {
    private callingService: BasicCallingService;
    private dataService: DataService;
    private internationalService: InternationalService;
    private entertainmentService: EntertainmentService;

    constructor() {
        this.callingService = new BasicCallingService();
        this.dataService = new DataService();
        this.internationalService = new InternationalService();
        this.entertainmentService = new EntertainmentService();
    }

    makeCall(number: string): void {
        this.callingService.makeCall(number);
    }

    receiveCall(number: string): void {
        this.callingService.receiveCall(number);
    }

    useData(megabytes: number): void {
        this.dataService.useData(megabytes);
    }

    checkDataBalance(): number {
        return this.dataService.checkDataBalance();
    }

    makeInternationalCall(country: string, number: string): void {
        this.internationalService.makeInternationalCall(country, number);
    }

    streamMedia(service: string): void {
        this.entertainmentService.streamMedia(service);
    }

    downloadContent(contentId: string): void {
        this.entertainmentService.downloadContent(contentId);
    }
}