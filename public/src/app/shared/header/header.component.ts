import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(private _router: Router) {
    }

    ngOnInit() {
    }

}
