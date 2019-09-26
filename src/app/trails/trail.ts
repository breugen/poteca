import { Point } from "./point";

export interface Trail {
    id: number;
    name?: string;
    massif?: string,
    description?: string,
    sign?: string,
    points: Point[],
    // in minutes
    time: number,
    reverseTime?: number
}