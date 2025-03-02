import { Author } from "./author";

export interface Course {
    id: number;
    title: string;
    creationDate: Date;
    duration: number;
    description: string;
    authors?: Author [];
    topRated?: boolean;
}