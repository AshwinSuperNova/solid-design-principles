import { ICallingService, IDataService, IInternationalService, IEntertainmentService } from "./plan-interfaces";
import { BasicPlan, DataPlan, PremiumPlan } from "./plans";
export class MobilePlanManager {   
    demonstratePlanFeatures(planName: string, plan: any): void {
        console.log(`\nDemonstrating ${planName} features:`);

        if (this.hasCallingService(plan)) {
            plan.makeCall('123-456-7890');
            plan.receiveCall('098-765-4321');
        }

        if (this.hasDataService(plan)) {
            plan.useData(100);
            plan.checkDataBalance();
        }

        if (this.hasInternationalService(plan)) {
            plan.makeInternationalCall('UK', '44-123-456789');
        }

        if (this.hasEntertainmentService(plan)) {
            plan.streamMedia('Netflix');
            plan.downloadContent('MOVIE-001');
        }
    }

    private hasCallingService(plan: any): plan is ICallingService {
        return 'makeCall' in plan && 'receiveCall' in plan;
    }

    private hasDataService(plan: any): plan is IDataService {
        return 'useData' in plan && 'checkDataBalance' in plan;
    }

    private hasInternationalService(plan: any): plan is IInternationalService {
        return 'makeInternationalCall' in plan;
    }

    private hasEntertainmentService(plan: any): plan is IEntertainmentService {
        return 'streamMedia' in plan && 'downloadContent' in plan;
    }
}


const planManager = new MobilePlanManager();

const basicPlan = new BasicPlan();
const dataPlan = new DataPlan();
const premiumPlan = new PremiumPlan();

planManager.demonstratePlanFeatures('Basic Plan', basicPlan);
