import { Pipe, PipeTransform } from '@angular/core';
import { Trail } from './trail';

/*
 * the shortest summary of the points on the path to be displayed in the trail list. 
 * Can be used along with the name or if the name is not provided so the hiker
 * can identify and call the trail somehow shorter then enumerating the whole list of points.
 * Usage:
 *    trail| trailTitle
 * Example:
 *   formats to: 'Circuit Poiana cu Schit'
*/
@Pipe({name: 'trailTitle'})
export class TrailTitlePipe implements PipeTransform {

    getTrailTitleFromPoints(trail: Trail): string {
        const trailStartingPoint = trail.points[0];
        const trailEndingPoint = trail.points[trail.points.length - 1];

        if (trailStartingPoint.id === trailEndingPoint.id) {
            // just a convention, that can be changed if we find a better way
            return 'Circuit ' + trailStartingPoint.name + ' - ' + 
                // the point in the middle of the list
                trail.points[trail.points.length / 2 | 0];
        } else {
            return trailStartingPoint.name + ' - ' + trailEndingPoint.name;
        }
    }

    transform(trail: Trail): string {
        return trail.name ? trail.name : this.getTrailTitleFromPoints(trail);
    }
}