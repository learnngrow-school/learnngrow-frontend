export type Homework = {
    fileSlug: string;
    title: string;
    teacherNotes: string;
    deadline: number | string | Date;
    completed: boolean;
}

export default Homework