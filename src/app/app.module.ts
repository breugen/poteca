import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { TNSCheckBoxModule } from '@nstudio/nativescript-checkbox/angular';

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { HomeComponent } from "./home/home.component";
import { TrailsComponent } from "./trails/trails.component";
import { TrailTitlePipe } from "./trails/trail-title.pipe";
import { SearchComponent } from "./search/search.component";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptUIListViewModule,
        TNSCheckBoxModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        TrailsComponent,
        ItemsComponent,
        ItemDetailComponent,
        TrailTitlePipe,
        SearchComponent
    ],
    entryComponents: [
        SearchComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
