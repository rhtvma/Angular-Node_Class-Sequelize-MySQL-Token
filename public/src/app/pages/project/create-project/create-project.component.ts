import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ToastrMessageService} from '../../../shared/services/toastr-message.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CreateProjectFormComponent} from './create-project-form/create-project-form.component';
import {Observable} from 'rxjs'
import {catchError, map, tap} from 'rxjs/operators';
import {HttpService} from '../../../shared/services/http.service';

@Component({
    selector: 'app-create-project',
    templateUrl: './create-project.component.html',
    styleUrls: ['./create-project.component.css'],
    providers: [ToastrMessageService]
})
export class CreateProjectComponent implements OnInit {

    @ViewChild(CreateProjectFormComponent) createProjectFormData;
    model: any;
    projectList: any;

    isAdd: boolean = false;

    constructor(private _router: Router, private _httpService: HttpService,
                private _toastrMessageService: ToastrMessageService) {
    }

    ngAfterViewInit() {
        debugger;
        this.model = this.createProjectFormData.createProjectForm;
    }

    onSubmit() {
        this.createProjectFormData.onSubmit();
    }

    ngOnInit() {
    }

    signup(): void {
        if (!this.model.valid) {
            this.onSubmit();
            console.log("Form is invalid!");
            return;
        }
        let data = this.model["controls"];
        debugger;
        const body = {
            firstname: data.firstname.value,
            lastname: data.lastname.value,
            username: data.username.value,
            email: data.email.value,
            password: data.password.value,
            mobile: data.mobile.value || null
        };
        this._httpService.post('/project', body)
            .subscribe(
                (data: { data: any, response: string, response_message: Array<any> }) => {
                    if (data.response === 'success') {
                        this._toastrMessageService.typeSuccess(data.response_message);
                        //this._router.navigate(['/project']);
                    }
                },
                (error) => {
                    this._toastrMessageService.typeError(error.error.response_message || error.status_text);
                    //this._router.navigate(['/project']);
                });

    }
}
