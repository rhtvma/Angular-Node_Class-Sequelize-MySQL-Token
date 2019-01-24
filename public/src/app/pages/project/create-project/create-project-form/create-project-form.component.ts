/**
 * Created by rohit on 2018-09-18.
 */
import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {HttpService} from '../../../../shared/services/http.service';
@Component({
    selector: 'create-project-form',
    templateUrl: './create-project-form.component.html',
    styleUrls: ['./create-project-form.component.css']
})

export class CreateProjectFormComponent implements OnInit {

    // project: data.project.value,
    // formsubmitted: data.formsubmitted.value,
    // description: data.description.value,
    // total: data.total.value,
    // profile: data.profile.value
    //
    
    createProjectForm: FormGroup;
    project: FormControl;
    description: FormControl;
    symbol: FormControl;
    profile: FormControl;
    formsubmitted: FormControl;
    // username: FormControl;
    // mobile: FormControl;
    // profile: FormControl;

    usersListData: any;
    selectedUsers: Array<any>;

    constructor(private _httpService: HttpService) {
    }

    ngOnInit() {
        this.createFormControls();
        this.createForm();
        this.getUsersList();
        this.selectedUsers = [];
    }

    public onMouseDown(event: MouseEvent, item) {
        event.preventDefault();
        event.target['selected'] = !event.target['selected'];
        if (event.target['selected']) {
            this.selectedUsers.push(item.id);
            this.createProjectForm.value.profile = this.selectedUsers;
        } else {
            let index: number = -1;
            index = this.createProjectForm.value.profile.indexOf(item.id);
            if (index > -1) {
                this.createProjectForm.value.profile.splice(index);
            }
        }
    }

    getUsersList() {
        this._httpService.get('/usersList')
            .subscribe(
                (result: { data: any, msg: string, status: number }) => {
                    if (result.data) {
                        this.usersListData = result.data;
                    } else {
                        this.usersListData = [];
                    }
                })
    }

    createFormControls() {
        this.project = new FormControl('', [
            Validators.required
        ]);
        this.description = new FormControl('', [
            Validators.required
        ]);
        this.symbol = new FormControl('', [
            Validators.required,
            // Validators.pattern("[^ @]*@[^ @]*")
        ]);
        this.profile = new FormControl('');
        this.formsubmitted = new FormControl('', [
            // Validators.required,
            // Validators.minLength(5)
        ]);
        // this.username = new FormControl('', [
        //     Validators.required
        // ]);
    }

    createForm() {
        this.createProjectForm = new FormGroup({
            project: this.project,
            description: this.description,
            symbol: this.symbol,
            profile: this.profile,
            formsubmitted: this.formsubmitted,
            // username: this.username,
            // mobile: this.mobile,
            // profile: new FormControl(this.profile, Validators.required)
        });
    }

    onSubmit() {
        console.log('you submitted value: ', this.createProjectForm.value);
        const formData = this.createProjectForm["controls"];
        // formData['project'].markAsTouched();
        // formData['description'].markAsTouched();
        // formData['symbol'].markAsTouched();
        // formData['profile'].markAsTouched();
        // formData['formsubmitted'].markAsTouched();
    }
}
