export type News = {
    id? : string | number;
    title: string;
    details: string | any;
    picturePath?: string;
    vkUrl?: string;
}