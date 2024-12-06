export type User = {
    id? : string | number;
    firstName: string;
    lastName: string;
    middleName?: string;
    phone: string;
    password: string;
    isTeacher?: boolean
    isSuperuser?: boolean
    iconPath?: string
}