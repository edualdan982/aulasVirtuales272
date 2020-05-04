import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { MaterialModule } from "./../material/material.module";

import { BannerComponent } from "./components/banner/banner.component";
import { SharedModule } from "./../shared/shared.module";
@NgModule({
  declarations: [BannerComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule, MaterialModule],
})
export class HomeModule {}
