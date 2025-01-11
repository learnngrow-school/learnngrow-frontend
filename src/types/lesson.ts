export type Lesson = {
    homework: string;
    studentSlug: string;
    teacherNotes: string;
    teacherSlug: string;
    duration: number | any;
    timestamp: number | string | Date;
}

export default Lesson