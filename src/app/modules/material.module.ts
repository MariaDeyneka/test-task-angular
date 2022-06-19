import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatSidenavModule,
    MatSelectModule
  ],
  exports: [
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatSidenavModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
