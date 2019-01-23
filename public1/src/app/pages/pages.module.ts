import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages.component';
import {FooterComponent} from '../shared/footer/footer.component';
import {SidebarComponent} from '../shared/sidebar/sidebar.component';

@NgModule({
    imports: [
        CommonModule,
        PagesRoutingModule
    ],
    declarations: [PagesComponent, FooterComponent, SidebarComponent]
})
export class PagesModule {
}
