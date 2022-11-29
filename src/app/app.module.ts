import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GameModule } from './game/game.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { NgxsModule } from '@ngxs/store';
import { GameState } from 'src/store/game.state';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    //my modules
    GameModule,
    CoreModule,
    NgxsModule.forRoot([GameState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
