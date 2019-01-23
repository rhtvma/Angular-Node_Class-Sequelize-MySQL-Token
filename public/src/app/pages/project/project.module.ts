import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {ProjectRoutingModule} from './project-routing.module';
import {ProjectComponent} from './project.component';
import {ListPojectComponent} from './list-poject/list-poject.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        ProjectRoutingModule
    ],
    declarations: [ProjectComponent, ListPojectComponent]
})
export class ProjectModule {
}
