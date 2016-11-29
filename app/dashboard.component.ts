import { Component } from "@angular/core";
import { DataService } from './data.service';

@Component({
    moduleId: module.id,
    selector: "dashboard",
    templateUrl: "dashboard.component.html"
})

export class DashboardComponent {

    data: any;
    properData: any;

    constructor(private dataService: DataService){}

    getData(): void{
        this.dataService.getData()
            .then(data => this.data = data);
    }

    moreInfo(id: number): void{
        this.dataService.getMoreInfo(id)
            .then(data => this.properData = data);
    }

}