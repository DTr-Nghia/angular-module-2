import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [
    ],
    imports: [
        HeaderComponent,
        RouterModule,
        CommonModule
    ],
    exports: [
        HeaderComponent,
    ],
    providers: [],
})
export class SharedModule { }