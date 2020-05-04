import { Material } from "./../../../../core/models/Material";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-material",
  templateUrl: "./material.component.html",
  styleUrls: ["./material.component.sass"],
})
export class MaterialComponent implements OnInit {
  material: Material = {
    direccion: "assets/videos/UseCaseDiagram.mp4",
    tipo: "video",
  };

  constructor() {}

  ngOnInit(): void {}
}
