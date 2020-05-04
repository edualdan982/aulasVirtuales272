import { Component, OnInit } from "@angular/core";

import { Lesson } from "../../../../core/models/Lesson";

@Component({
  selector: "app-lessons-list",
  templateUrl: "./lessons-list.component.html",
  styleUrls: ["./lessons-list.component.sass"],
})
export class LessonsListComponent implements OnInit {
  lessons: Lesson[];
  displayedColumns: string[] = ["nro", "nombre", "descripcion", "acciones"];

  constructor() {}

  ngOnInit(): void {
    this.lessons = [
      {
        nroLesson: 1,
        nombre: "Introduccion",
        descripcion: "primera clase de la materia ",
      },
    ];
  }
}
