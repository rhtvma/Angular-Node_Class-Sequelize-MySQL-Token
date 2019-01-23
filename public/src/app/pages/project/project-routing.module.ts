import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProjectComponent} from './project.component';
import {ListPojectComponent} from './list-poject/list-poject.component';
const routes: Routes = [
    {
        path: '',
        component: ProjectComponent,
        children: [
            {
                path: '',
                redirectTo: '/project/list',
                pathMatch: 'full'
            },
            {
                path: 'list', component: ListPojectComponent
            },
            {
                path: 'create',
                loadChildren: './create-project/create-project.module#CreateProjectModule'
            }]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectRoutingModule {
}
