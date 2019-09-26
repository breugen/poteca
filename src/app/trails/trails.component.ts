import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./trails.component.html"
})
export class TrailsComponent implements OnInit {
    type: String;

    constructor(
        // private itemService: ItemService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const type = this.route.snapshot.params.type;
        console.log('type is ' , type);
        this.type = type;
    }
}
