export interface Course {
    id: number;
    category: { title: string };
    course: { title: string; description: string; price: number; grade: number; string: string };
    subject: { title: string };
}
