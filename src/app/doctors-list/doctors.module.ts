import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsListComponent } from './doctors-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


const routes: Routes = [
  { path: '', component: DoctorsListComponent }, // Path for the user list
];

@NgModule({
  declarations: [DoctorsListComponent],
  imports: [CommonModule, 
            RouterModule.forChild(routes), 
            MatIconModule,
            MatButtonModule],
})
export class DoctorsModule {}
