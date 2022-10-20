import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/services/auth.guard';
import { CategoriaAppComponent } from './categoria-app.component';

const routes: Routes = [
  {
    path: '', component: CategoriaAppComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'listar', pathMatch: 'full' },
      { path: 'listar', component: ListarCategoriaComponent },
      { path: 'inserir', component: InserirCategoriaComponent },
      {
        path: 'editar/:id',
        component: EditarCategoriaComponent,
        resolve: { categoria: FormsCategoriaResolver }
      },
      {
        path: 'excluir/:id',
        component: ExcluirCategoriaComponent,
        resolve: { categoria: VisualizarCategoriaResolver }
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }
