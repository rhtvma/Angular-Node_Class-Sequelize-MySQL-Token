import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {CreateProjectComponent} from './create-project.component';
import {CreateProjectFormComponent} from './create-project-form/create-project-form.component';
import {CreateProjectRoutingModule} from './create-project-routing.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        CreateProjectRoutingModule,
        FormsModule
    ],
    declarations: [CreateProjectComponent, CreateProjectFormComponent]
})
export class CreateProjectModule {
}
