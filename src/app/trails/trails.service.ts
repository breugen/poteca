import { Injectable } from "@angular/core";

import { Trail } from "./trail";
import { Point } from "./point";

const rawPoints = require('../database/points.json');
const rawTrails = require('../database/trails.json');

@Injectable({
    providedIn: "root"
})
export class TrailsService {

    trails: Array<Trail> = rawTrails.map(rawTrail => {
        // populate the collection of points based on ids
        const trailPoints: Point[] = rawTrail.points.map((pointId: number) => {
            return this.getPoint(pointId);
        });
        const jsonTrail: any = Object.assign({}, rawTrail);
        jsonTrail.points = trailPoints;
        const trail: Trail = <Trail>jsonTrail;
        return trail;
    }).filter((trail: Trail) => {
        // eliminate invalid trails that should not have been added to the DB
        // in the first place, ex: trails with less then 2 points
        return Array.isArray(trail.points) && (trail.points.length > 1);
    });

    getPoint(id: number): Point {
        return rawPoints.find((point: Point) => point.id === id);
    }

    getAllTrails(): Array<Trail> {
        return this.trails;
    }
}
