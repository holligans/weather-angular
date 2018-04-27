import { Component, OnInit } from "@angular/core";
import { City } from "../models/city";

@Component({
  selector: "app-enter-city",
  templateUrl: "./enter-city.component.html",
  styleUrls: ["./enter-city.component.css"]
})
export class EnterCityComponent implements OnInit {
  model = new City("");
  submitted: boolean = false;

  constructor() {}

  ngOnInit() {}

  newCity() {
    this.model = new City("havana");
  }
  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
