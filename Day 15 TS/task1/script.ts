export type ID = string | number;

export interface Student {
    id: ID;
    name: string;
    age?: number;
    grade: string;
}