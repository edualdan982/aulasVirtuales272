import { Lesson } from "./../../../../core/models/Lesson";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-lesson",
  templateUrl: "./lesson.component.html",
  styleUrls: ["./lesson.component.sass"],
})
export class LessonComponent implements OnInit {
  lesson: Lesson = {
    nroLesson: 1,
    nombre: "Introduccion",
    descripcion: "Primera clase - Bienvenida",
  };
  constructor() {}

  ngOnInit(): void {}
}
