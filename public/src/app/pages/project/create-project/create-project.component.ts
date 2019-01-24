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

    saveProject(): void {
        if (!this.model.valid) {
            // this.onSubmit();
            console.log("Form is invalid!");
            return;
        }
        let data = this.model["controls"];
        debugger;
        const body = {
            project: data.project.value,
            formsubmitted: data.formsubmitted.value,
            description: data.description.value,
            symbol: data.symbol.value,
            profile: data.profile.value || [1, 2]
        };
        this._httpService.post('/projectCreate', body)
            .subscribe(
                (result: { data: any, msg: string, status: number }) => {
                    if (result.status) {
                        this._toastrMessageService.typeSuccess(result.msg);
                        this._router.navigate(['/project/list']);
                    } else {
                        this._toastrMessageService.typeError(result.msg);
                    }
                },
                (error) => {
                    this._toastrMessageService.typeError(error.error.msg);
                    this._router.navigate(['/project/create']);
                });

    }
}
