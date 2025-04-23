import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import {
  MatButtonToggle,
  MatButtonToggleGroup,
} from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { EventDialogComponent } from '../appointment-dialog/appointment-dialog.component';
import { BasketComponent } from '../basket/basket.component';
import {AbsenceComponent} from '../absence/absence.component'
import { AppComponent } from '../app.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import {PresenceComponent} from '../presence/presence.component'
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';



// firebase
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from '../../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";

const routes: Routes = [{ path: '', component: CalendarComponent }];

@NgModule({
  declarations: [CalendarComponent, BasketComponent, ],
  imports: [
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AppComponent,
    CommonModule,
    MatButtonModule,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatIconModule,
    DragDropModule,
    EventDialogComponent,
    RouterModule.forChild(routes),
    AbsenceComponent,
    MatOptionModule, // Import MatOptionModule
    MatSelectModule, // Import MatSelectModule
    MatTooltipModule,
    PresenceComponent,
    MatCardModule,
    MatListModule,
    MatMenuTrigger,
    MatMenu,
    MatMenuItem,
  ],
})
export class CalendarModule {}
