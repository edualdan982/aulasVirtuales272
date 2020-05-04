import { CourseService } from "./../../../../core/services/course/course.service";
import { Component, OnInit } from "@angular/core";

import { Course } from "../../../../core/models/course";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.sass"],
})
export class CoursesComponent implements OnInit {
  courses: Course[];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.fetchCourses();
  }

  fetchCourses() {
    this.courseService.getAllCourses().subscribe((courses) => {
      this.courses = courses;
    });
  }
}
