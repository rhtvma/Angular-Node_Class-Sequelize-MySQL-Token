/**
 * Created by rohit on 2018-09-18.
 */
import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'create-project-form',
    templateUrl: './create-project-form.component.html',
    styleUrls: ['./create-project-form.component.css']
})

export class CreateProjectFormComponent implements OnInit {

    createProjectForm: FormGroup;
    projectSchool: FormControl;
    description: FormControl;
    symbol: FormControl;
    password: FormControl;
    cpassword: FormControl;
    username: FormControl;
    mobile: FormControl;

    ngOnInit() {
        this.createFormControls();
        this.createForm();
    }

    createFormControls() {
        this.projectSchool = new FormControl('', [
            Validators.required
        ]);
        this.description = new FormControl('', [
            Validators.required
        ]);
        this.symbol = new FormControl('', [
            Validators.required,
            Validators.pattern("[^ @]*@[^ @]*")
        ]);
        this.password = new FormControl('', [
            Validators.required,
            Validators.minLength(5)
        ]);
        this.cpassword = new FormControl('', [
            Validators.required,
            Validators.minLength(5)
        ]);
        this.username = new FormControl('', [
            Validators.required
        ]);
        this.mobile = new FormControl('');
    }

    createForm() {
        this.createProjectForm = new FormGroup({
            projectSchool: this.projectSchool,
            description: this.description,
            symbol: this.symbol,
            password: this.password,
            cpassword: this.cpassword,
            username: this.username,
            mobile: this.mobile
        });
    }

    onSubmit() {
        console.log('you submitted value: ', this.createProjectForm.value);
        const formData = this.createProjectForm["controls"];
        formData['projectSchool'].markAsTouched();
        formData['description'].markAsTouched();
        formData['username'].markAsTouched();
        formData['symbol'].markAsTouched();
        formData['password'].markAsTouched();
        formData['cpassword'].markAsTouched();
    }
}
