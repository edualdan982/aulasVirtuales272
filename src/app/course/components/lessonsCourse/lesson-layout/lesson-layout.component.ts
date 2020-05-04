import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-lesson-layout",
  templateUrl: "./lesson-layout.component.html",
  styleUrls: ["./lesson-layout.component.sass"],
})
export class LessonLayoutComponent implements OnInit {
  opened: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
