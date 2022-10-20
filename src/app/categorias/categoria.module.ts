import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { CategoriaAppComponent } from './categoria-app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    CategoriaAppComponent,
    ListarCategoriaComponent,
    InserirCategoriaComponent,
    EditarCategoriaComponent,
    ExcluirCategoriaComponent
  ],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    ReactiveFormsModule,
    NgSelectModule
  ]
})
export class CategoriaModule { }
