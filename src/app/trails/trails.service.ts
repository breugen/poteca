import { Injectable } from "@angular/core";

import { Trail } from "./trail";
import { Point } from "./point";
import * as points from 'database/points.json';
import * as trails from 'database/trails.json';

@Injectable({
    providedIn: "root"
})
export class ItemService {
    
    getPoint(id: number): Point {
        return points.find(point => point.id === id);
    }

    getAllTrails(): Array<Trail> {

        // fixme:
        return trails;
    }
}
