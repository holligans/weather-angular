import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { EnterCityComponent } from "./enter-city/enter-city.component";
import { WeekWeatherComponent } from "./week-weather/week-weather.component";
import { WeekDailyComponent } from "./week-daily/week-daily.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const appRoutes: Routes = [
  { path: "", component: EnterCityComponent },
  { path: "weekly", component: WeekWeatherComponent },
  { path: "day/:id", component: WeekDailyComponent },
  { path: "**", component: NotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EnterCityComponent,
    WeekWeatherComponent,
    WeekDailyComponent,
    NotFoundComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
