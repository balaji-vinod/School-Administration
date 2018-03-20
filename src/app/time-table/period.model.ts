import { Time } from "@angular/common";

export class Period {

    public periodId : number;
    public periodName: String;
    public startTime: Time;
    public endTime: Time;

    constructor(periodId: number, periodName: String, startTime: Time, endTime: Time){
        this.periodId = periodId;
        this.periodName = periodName;
        this.startTime = startTime;
        this.endTime = endTime;
    }

}