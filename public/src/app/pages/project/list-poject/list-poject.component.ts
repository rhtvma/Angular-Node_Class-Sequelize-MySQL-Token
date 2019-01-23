import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ToastrMessageService} from '../../../shared/services/toastr-message.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs'
import {catchError, map, tap} from 'rxjs/operators';
import {HttpService} from '../../../shared/services/http.service';

@Component({
    selector: 'app-list-poject',
    templateUrl: './list-poject.component.html',
    styleUrls: ['./list-poject.component.css'],
    providers: [ToastrMessageService]
})
export class ListPojectComponent implements OnInit {
    projectList: any;

    constructor(private _router: Router, private _httpService: HttpService,
                private _toastrMessageService: ToastrMessageService) {
    }

    ngOnInit() {
        this.getProjectList();
    }

    getProjectList() {
        this._httpService.get('/projectList')
            .subscribe(
                (result: { data: any, msg: string, status: number }) => {
                    if (result.data) {
                        this.projectList = result.data;
                        this._toastrMessageService.typeSuccess(result.msg);
                        //this._router.navigate(['/project']);
                    }
                },
                (error) => {
                    this._toastrMessageService.typeError(error.error.response_message || error.status_text);
                    //this._router.navigate(['/project']);
                });

    }

}
