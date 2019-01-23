import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ToastrMessageService} from '../../shared/services/toastr-message.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs'
import {catchError, map, tap} from 'rxjs/operators';
import {HttpService} from '../../shared/services/http.service';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.css'],
    providers: [ToastrMessageService]
})
export class ProjectComponent implements OnInit {

    constructor(public router: Router) {
    }

    ngOnInit() {

    }
}
