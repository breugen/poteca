import { Injectable } from "@angular/core";

const defaultCities = require('../database/cities.json');

import {
    getString,
    setString,
    hasKey
    // remove
} from "tns-core-modules/application-settings";

@Injectable({
    providedIn: "root"
})
export class StorageService {

    // uncomment this to clear the cities saved on the phone.
    // I don't know how to remove app settings properly, without 
    // temporary code like this :) . I will look into this later 
    // x = remove("CITIES");

    cities = hasKey('CITIES') ? JSON.parse(getString('CITIES')) : defaultCities;

    getUserCities() {
        return this.cities;
    }

    saveUserCities(cities) {
        setString('CITIES', JSON.stringify(cities));
    }
}
