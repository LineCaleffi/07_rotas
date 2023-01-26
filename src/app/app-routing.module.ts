import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { CursosGuard } from './guard/cursos.guard';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: 'cursos',  loadChildren: () => import('./cursos/cursos.module').then(
      mod => mod.CursosModule), canActivate: [AuthGuard], canActivateChild: [CursosGuard], canLoad: [AuthGuard]
  },
  { path: 'alunos',  loadChildren: () => import('./alunos/alunos.module').then(
    mod => mod.AlunosModule), canActivate: [AuthGuard], canLoad: [AuthGuard]
  },
  { path: 'login', component: LoginComponent},
  { path:'home', component: HomeComponent, canActivate: [AuthGuard], canLoad: [AuthGuard]},
  { path:'', redirectTo:'/home', pathMatch: 'full' },
  /*qualquer rota diferente das de cima será redirecionada pra pag. de Não encontrada
    se acrescentar o canActivate: [AuthGuard] -> redireciona para a página de login caso não for encontrada. */ 
  { path: '**', component: PaginaNaoEncontradaComponent} 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*
  Para projetos com bastante componentes, é necessário criar um routing e um modulo para cada um, assim o APP.Module não fica sobrecarregado 
*/
