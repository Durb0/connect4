import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//material modules
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
    declarations: [
    HeaderComponent
],
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatSlideToggleModule,
        FormsModule,
        ReactiveFormsModule,
        
    ],
    providers: [],
    bootstrap: [],
    exports: [
        HeaderComponent
    ]
})
export class CoreModule { }
