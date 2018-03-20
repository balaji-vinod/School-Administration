import { ClassRoom } from "./class-room.model";
import { Period } from "./period.model";

export class TimeTableTo {

    public timeTableId: number;
    public timeTableName: String;
    public dayOfWeek: number;
    public classRoom: ClassRoom;
    public period: Period;

    constructor(timeTableId: number, timeTableName: String, dayOfWeek: number, classRoom: ClassRoom, period: Period) {
        this.timeTableId = timeTableId;
        this.timeTableName = timeTableName;
        this.dayOfWeek = dayOfWeek;
        this.classRoom = classRoom;
        this.period = period;
    }

}