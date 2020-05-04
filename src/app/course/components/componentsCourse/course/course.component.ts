import { Component, OnInit, Input } from "@angular/core";

import { Course } from "../../../../core/models/course";

@Component({
  selector: "app-course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.sass"],
})
export class CourseComponent implements OnInit {
  @Input() course: Course;

  constructor() {}

  ngOnInit(): void {}
}
