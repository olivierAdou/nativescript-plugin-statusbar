import { Component } from "@angular/core";
import { Statusbar } from 'nativescript-statusbar';
@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent {
    constructor(public statusbar : Statusbar){
        //this.statusbar.enableFullScreen.leanBack();
    }
}
