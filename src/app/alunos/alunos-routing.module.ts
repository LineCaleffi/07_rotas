import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosGuard } from '../guard/alunos.guard';
import { AlunosDeactiveGuard } from '../guard/alunos-deactive.guard';

const routes: Routes = [
  // rotas filhas
  { path: '', component: AlunosComponent, 
    canActivateChild: [AlunosGuard],
    children:[
      { path: 'novo', component: AlunoFormComponent },
      { path: ':id', component: AlunoDetalheComponent },
      { path: ':id/editar', component: AlunoFormComponent, canDeactivate: [AlunosDeactiveGuard] }
    ] 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
