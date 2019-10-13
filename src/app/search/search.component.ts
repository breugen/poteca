import { Component, OnInit } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";

import { StorageService } from "../database/storage.service";

@Component({
    selector: "modal",
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {
    cities;

    constructor(
        private params: ModalDialogParams,
        private storageService: StorageService
    ) {}

    ngOnInit() {
        this.cities = this.storageService.getUserCities();
    }

    close() {
        this.params.closeCallback();
    }

    changeCheckedRadio(city) {
        city.included = !city.included;
    }
}

