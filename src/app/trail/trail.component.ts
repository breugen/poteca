import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Trail } from "../core/trail";
import { TrailsService } from "../core/trails.service";

@Component({
    selector: "ns-trail",
    moduleId: module.id,
    templateUrl: "./trail.component.html"
})
export class TrailComponent implements OnInit {
    trail: Trail;

    constructor(
        private trailsService: TrailsService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.trail = this.trailsService.getTrail(id);
    }
}
