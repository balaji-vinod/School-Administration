export class ClassRoom {

    public classRoomId: number;
    public standard: String;
    public section: String;

    constructor(classRoomId: number, standard: String, section: String) {
        this.classRoomId = classRoomId;
        this.standard = standard;
        this.section = section;
    }
}