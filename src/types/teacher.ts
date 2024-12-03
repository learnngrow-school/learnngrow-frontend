import { User } from "./user";

export type TeacherData = {
    biography?: string;
    subjectIds: number[];
}

export type Teacher = {
    teacherData: TeacherData;
    userData: User;
}
