import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.scss"],
  animations: [SharedAnimations]
})
export class ContactFormComponent implements OnInit {
  private formValues = {
    'email': null,
    'name': null,
    'subject': null,
    'message': null,

  };
 staticAlertClosed : true;
  error = null;
  success: any = null;
  constructor() {}

  ngOnInit() {}

  submitForm(form: NgForm) {
    this.formValues.email = form.value.email;
    this.formValues.name = form.value.name;
    this.formValues.subject = form.value.subject;
    this.formValues.message = form.value.message;
    this.success=true;



  }
}
