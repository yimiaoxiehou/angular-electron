import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CrowdService} from "../../core/services/crowd/crowd.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  validateForm!: FormGroup;
  error: any;

  submitForm(): void {
    this.error = null;
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.crowdService.auth(this.validateForm.value.userName, this.validateForm.value.password)
      .then(user => console.log(user))
      .catch(error => this.error = error);
  }

  constructor(private fb: FormBuilder,
              private crowdService: CrowdService) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      // eslint-disable-next-line @typescript-eslint/unbound-method
      userName: [null, [Validators.required]],
      // eslint-disable-next-line @typescript-eslint/unbound-method
      password: [null, [Validators.required]],
      remember: [true]
    });
  }
}
