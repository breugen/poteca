import { Component, OnInit, ViewChild, ViewContainerRef} from "@angular/core";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { RadListViewComponent } from "nativescript-ui-listview/angular";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { ActivatedRoute } from "@angular/router";
import { TrailsService } from "../core/trails.service";
import { Trail } from "../core/trail";
import { SearchComponent } from "../search/search.component";

@Component({
    selector: "ns-trails",
    moduleId: module.id,
    providers: [ModalDialogService],
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
        private route: ActivatedRoute,
        private modalService: ModalDialogService,
        private viewContainerRef: ViewContainerRef
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

    public showFilterModal() {
        const options: ModalDialogOptions = {
            viewContainerRef: this.viewContainerRef,
            fullscreen: false,
            context: {
                
            }
        };
        this.modalService.showModal(SearchComponent, options).then((cities) => {
            let listView = this.trailsListViewComponent.listView;
            const includedCities = cities.filter(city => city.included).
                map(city => city.code);
                console.log('includedCities ', includedCities);
            listView.filteringFunction = (trail: Trail) => {
                console.log('trail.points[0].countyCode ', trail.points[0].countyCode)
                return includedCities.includes(trail.points[0].countyCode);
            }
        });
    }
}
