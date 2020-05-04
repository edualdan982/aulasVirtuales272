import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.sass"],
})
export class BannerComponent implements OnInit {
  images: string[] = [
    "assets/images/Banner-cursos1.png",
    "assets/images/Banner-cursos2.png",
    "assets/images/Banner-cursos3.png",
    "assets/images/Banner-cursos4.png",
  ];
  constructor() {}

  ngOnInit(): void {}
}
