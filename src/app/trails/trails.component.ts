import { Component, OnInit, ViewChild } from "@angular/core";
import { RadListViewComponent } from "nativescript-ui-listview/angular";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { ActivatedRoute } from "@angular/router";
import { TrailsService } from "./trails.service";
import { Trail } from "./trail";

@Component({
    selector: "ns-trails",
    moduleId: module.id,
    templateUrl: "./trails.component.html"
})
export class TrailsComponent implements OnInit {
    type: String;
    trails: ObservableArray<Trail>;
    currentSortCriteria: String;
    currentSortOrder: number = -1;

    @ViewChild("trailsListView", { read: RadListViewComponent, static: false }) trailsListViewComponent: RadListViewComponent;

    constructor(
        private trailsService: TrailsService,
        private route: ActivatedRoute
    ) { };

    ngOnInit(): void {
        const type = this.route.snapshot.params.type;
        this.type = type;
        this.trails = new ObservableArray<Trail>(this.trailsService.getAllTrails());
    }


    public sortTrails(criteria: string) {
        let listView = this.trailsListViewComponent.listView;
        if (criteria !== this.currentSortCriteria) {
            this.currentSortCriteria = criteria;
            this.currentSortOrder = -1;
        } else {
            this.currentSortOrder = - this.currentSortOrder;
        }
         
        listView.sortingFunction = (item, otherItem) => {
            if (item[criteria] < otherItem[criteria]) {
                return -this.currentSortOrder;
            } else if (item[criteria] > otherItem[criteria]) {
                return this.currentSortOrder;
            } else {
                return 0;
            }
        };
    }
}
