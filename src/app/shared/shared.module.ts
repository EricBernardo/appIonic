import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './components/header/header.component';

const MODULE_COMPONENTS = [
  HeaderComponent
];

const MODULE_MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  IonicModule
];

@NgModule({
  declarations: [
    ...MODULE_COMPONENTS
  ],
  imports: [
    ...MODULE_MODULES
  ],
  exports: [
    ...MODULE_MODULES,
    ...MODULE_COMPONENTS
  ]
})
export class SharedModule { }
