import {Component, OnInit, ViewChild, AfterViewInit, Pipe} from '@angular/core';
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
    selectedRecord: any;
    searchText: string;

    constructor(private _router: Router, private _httpService: HttpService,
                private _toastrMessageService: ToastrMessageService) {
    }

    ngOnInit() {
        this.projectList = [];
        this.getProjectList();
        this.seletectProject(1);
    }

    seletectProject(i: any) {
        debugger;
        this.selectedRecord = JSON.parse(JSON.stringify(this.projectList[i]));
        console.log(this.selectedRecord);
    }

    getProjectList() {
        this._httpService.get('/projectList')
            .subscribe(
                (result: { data: any, msg: string, status: number }) => {
                    if (result.data) {
                        this.projectList = result.data;
                        this._toastrMessageService.typeSuccess(result.msg);
                        console.log(this.projectList);
                    }
                },
                (error) => {
                    this._toastrMessageService.typeError(error.error.response_message || error.status_text);
                });

    }
}
