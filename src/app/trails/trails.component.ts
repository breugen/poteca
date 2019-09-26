import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TrailsService } from "./trails.service";
import { Trail } from "./trail";

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./trails.component.html"
})
export class TrailsComponent implements OnInit {
    type: String;
    trails: Trail[];

    constructor(
        private trailsService: TrailsService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const type = this.route.snapshot.params.type;
        this.type = type;
        this.trails = this.trailsService.getAllTrails();
    }
}
