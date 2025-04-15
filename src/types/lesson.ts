export type Lesson = {
    homework: string;
    studentSlug: string;
    teacherNotes: string;
    teacherSlug: string;
    duration: number | any;
    timestamp: number | string | Date;
    fileSlug: string;
    subjectId: number;
    subject: string;
}

export default Lesson