import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import { Course } from "../../../../core/models/course";

@Component({
  selector: "app-course-detail",
  templateUrl: "./course-detail.component.html",
  styleUrls: ["./course-detail.component.sass"],
})
export class CourseDetailComponent implements OnInit {
  opened: boolean;
  course: Course;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const siglaPar = params.sigla;
      this.course = { sigla: siglaPar, nombre: "dsfasdf" };
      // this.fetchProduct(sigla);
    });
  }

  // fetchProduct(sigla: string) {
  //   this.productServices
  //     .getProduct(id)
  //     .subscribe((product) => (this.product = product));
  // }
}
