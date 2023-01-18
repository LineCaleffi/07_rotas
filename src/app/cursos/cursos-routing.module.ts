import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './cursos.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

const routes: Routes = [
  { path: '', component: CursosComponent},
  { path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
  { path: ':id', component: CursoDetalheComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }

/*
  Para projetos com bastante componentes, é necessário criar um routing e um modulo para cada um, assim o APP.Module não fica sobrecarregado 
*/