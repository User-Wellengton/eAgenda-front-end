import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompromissoRoutingModule } from './compromisso-routing.module';
import { CompromissoAppComponent } from './compromisso-app.component';
import { ListarCompromissoComponent } from './listar/listar-compromisso.component';
import { InserirCompromissoComponent } from './inserir/inserir-compromisso.component';
import { EditarCompromissoComponent } from './editar/editar-compromisso.component';
import { ExcluirCompromissoComponent } from './excluir/excluir-compromisso.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { CompromissoService } from './services/compromisso.service';
import { FormsCompromissoResolver } from './services/forms-compromisso.resolver';
import { VisualizarCompromissoResolver } from './services/visualizar-compromisso.resolver';



@NgModule({
  declarations: [
    CompromissoAppComponent,
    ListarCompromissoComponent,
    InserirCompromissoComponent,
    EditarCompromissoComponent,
    ExcluirCompromissoComponent
  ],
  imports: [
    CommonModule,
    CompromissoRoutingModule,
    ReactiveFormsModule,
    NgSelectModule
  ],

  providers: [ CompromissoService, FormsCompromissoResolver, VisualizarCompromissoResolver]

})
export class CompromissoModule { }
