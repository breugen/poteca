import { Injectable, OnInit } from "@angular/core";

import { Trail } from "./trail";
import { Point } from "./point";
// FIXME: find a way to import the json into the app.
// add export in scouter
const rawPoints = require('database/points.json');
const rawTrails = require('database/trails.json');

@Injectable({
    providedIn: "root"
})
export class TrailsService implements OnInit {

    trails: Array<Trail>;

    getPoint(id: number): Point {
        return rawPoints.find(point => point.id === id);
    }

    getAllTrails(): Array<Trail> {
        return this.trails;
    }

    ngOnInit() {
        this.trails = rawTrails.map(rawTrail => {
            const trailPoints: Point[] = rawTrail.points.map((pointId) => {
                return this.getPoint(pointId);
            });
            const jsonTrail: any = rawTrail;
            jsonTrail.points = trailPoints;
            const trail: Trail = <Trail>jsonTrail;
            return trail;
        });
    }

}
