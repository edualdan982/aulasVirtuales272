import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { CourseRoutingModule } from "./course-routing.module";

import { CourseComponent } from "./components/componentsCourse/course/course.component";
import { CoursesComponent } from "./components/componentsCourse/courses/courses.component";
import { CourseDetailComponent } from "./components/componentsCourse/course-detail/course-detail.component";

import { MaterialModule } from "./../material/material.module";
import { LessonsListComponent } from "./components/lessonsCourse/lessons-list/lessons-list.component";
import { LessonComponent } from "./components/lessonsCourse/lesson/lesson.component";
import { LessonLayoutComponent } from "./components/lessonsCourse/lesson-layout/lesson-layout.component";
import { MaterialLayoutComponent } from "./components/materialComponents/material-layout/material-layout.component";
import { MaterialComponent } from "./components/materialComponents/material/material.component";
import { MaterialChatComponent } from "./components/materialComponents/material-chat/material-chat.component";

@NgModule({
  declarations: [
    CoursesComponent,
    CourseComponent,
    CourseDetailComponent,
    LessonsListComponent,
    LessonComponent,
    LessonLayoutComponent,
    MaterialLayoutComponent,
    MaterialComponent,
    MaterialChatComponent,
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class CourseModule {}
