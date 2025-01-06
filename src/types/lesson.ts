export type Lesson = {
    homework: string;
    studentSlug: string;
    teacherNotes: string;
    teacherSlug: string;
    timestamp: number | string | Date;
}

export default Lesson