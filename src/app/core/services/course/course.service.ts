import { environment } from "./../../../../environments/environment";
import { Course } from "./../../models/course";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CourseService {
  sigla: string;
  constructor(private http: HttpClient) {}

  getAllCourses() {
    return this.http.get<Course[]>(`${environment.url_api}/courses`);
  }

  getCourse(sigla: string) {
    this.sigla = sigla;
    return this.http.get<Course>(`${environment.url_api}/courses/${sigla}`);
  }

  getLessons() {
    return this.http.get<Course>(
      `${environment.url_api}/courses/${this.sigla}/leccion`
    );
  }

  getLesson(nro: number) {
    return this.http.get<Course>(
      `${environment.url_api}/courses/${this.sigla}/leccion/${nro}`
    );
  }
}
