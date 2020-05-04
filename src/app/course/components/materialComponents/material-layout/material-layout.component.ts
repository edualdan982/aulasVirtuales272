import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { ActivatedRoute, Params } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: "app-material-layout",
  templateUrl: "./material-layout.component.html",
  styleUrls: ["./material-layout.component.sass"],
})
export class MaterialLayoutComponent implements OnInit {
  messageForm: FormControl;

  constructor() {
    this.messageForm = new FormControl("", [Validators.required]);
    // this.messageForm.valueChanges.subscribe((value) => {});
  } // private formBuilder: FormBuilder,

  ngOnInit(): void {
    // this.route.params.subscribe((params: Params) => {
    //   const id = params.id;
    //   console.log(id);
    // });
  }

  onSubmit() {
    console.log("Enviado");
  }
}
