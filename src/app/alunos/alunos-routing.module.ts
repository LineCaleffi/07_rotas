import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosGuard } from './guards/alunos.guard';
import { AlunosDeactiveGuard } from './guards/alunos-deactive.guard';
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';

const routes: Routes = [
  // rotas filhas
  { path: '', component: AlunosComponent, 
    canActivateChild: [AlunosGuard],
    children:[
      { path: 'novo', component: AlunoFormComponent },
      { path: ':id', component: AlunoDetalheComponent, resolve: { aluno: AlunoDetalheResolver } },
      { path: ':id/editar', component: AlunoFormComponent, canDeactivate: [AlunosDeactiveGuard] }
    ] 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
