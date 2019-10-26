import { Point } from "../trails/point";

export interface Trail {
    id: number;
    //name is optional, and set by mountaineers
    name?: string;
    massif?: string,
    description?: string,
    sign?: string,
    points: Point[],
    // in minutes
    time: number,
    reverseTime?: number
}