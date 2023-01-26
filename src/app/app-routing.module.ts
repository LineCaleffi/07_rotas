import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: 'cursos',  loadChildren: () => import('./cursos/cursos.module').then(
      mod => mod.CursosModule), canActivate: [AuthGuard]
  },
  { path: 'alunos',  loadChildren: () => import('./alunos/alunos.module').then(
    mod => mod.AlunosModule), canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent},
  { path:'', component: HomeComponent, canActivate: [AuthGuard] }
  //{ path: 'cursos', component: CursosComponent},
  //{ path: 'curso/:id', component: CursoDetalheComponent},
  //{ path: 'naoEncontrado', component: CursoNaoEncontradoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*
  Para projetos com bastante componentes, é necessário criar um routing e um modulo para cada um, assim o APP.Module não fica sobrecarregado 
*/
