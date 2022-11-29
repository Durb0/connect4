import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
//components
import { GridComponent } from './grid/grid.component';
import { DialogEndGameComponent } from './dialog-end-game/dialog-end-game.component';

//material modules
import {MatCardModule} from '@angular/material/card';
import { CellComponent } from './cell/cell.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { PawnZoneComponent } from './pawn-zone/pawn-zone.component';
import { GameService } from 'src/services/game.service';

@NgModule({
    declarations: [
        GridComponent,
        CellComponent,
        DialogEndGameComponent,
        PawnZoneComponent
    ],
    imports: [
        MatCardModule,
        CommonModule,
        MatDialogModule,
        NgxsModule,
        MatButtonModule,
        MatIconModule,
        DragDropModule
    ],
    providers: [
        GameService
    ],
    exports: [
        GridComponent,
        PawnZoneComponent
    ],
    bootstrap: [
        GridComponent
    ]
})
export class GameModule{}