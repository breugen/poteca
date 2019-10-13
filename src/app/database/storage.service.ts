import { Injectable } from "@angular/core";

const defaultCities = require('../database/cities.json');

import {
    getString,
    setString,
    hasKey
} from "tns-core-modules/application-settings";

@Injectable({
    providedIn: "root"
})
export class StorageService {

    cities = hasKey('CITIES') ? JSON.parse(getString('CITIES')) : defaultCities;

    getUserCities() {
        return this.cities;
    }

    saveUserCities(cities) {
        setString('CITIES', JSON.stringify(cities));
    }
}
