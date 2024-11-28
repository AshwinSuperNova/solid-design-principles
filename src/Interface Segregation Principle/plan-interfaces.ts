export interface ICallingService {
    makeCall(number: string): void;
    receiveCall(number: string): void;
}

export interface IDataService {
    useData(megabytes: number): void;
    checkDataBalance(): number;
}

export interface IInternationalService {
    makeInternationalCall(country: string, number: string): void;
}

export interface IEntertainmentService {
    streamMedia(service: string): void;
    downloadContent(contentId: string): void;
}