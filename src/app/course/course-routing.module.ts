import { LessonsListComponent } from "./components/lessonsCourse/lessons-list/lessons-list.component";
import { LessonLayoutComponent } from "./components/lessonsCourse/lesson-layout/lesson-layout.component";
import { LessonComponent } from "./components/lessonsCourse/lesson/lesson.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CoursesComponent } from "./components/componentsCourse/courses/courses.component";
import { CourseDetailComponent } from "./components/componentsCourse/course-detail/course-detail.component";

const routes: Routes = [
  {
    path: "",
    component: CoursesComponent,
  },
  {
    path: ":id",
    component: CourseDetailComponent /*LessonLayoutComponent*/,
    children: [
      {
        path: "",
        component: LessonsListComponent,
      },
      {
        path: "leccion/:id",
        component: LessonComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseRoutingModule {}
