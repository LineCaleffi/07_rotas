import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path:'', component: HomeComponent },
  { path: 'cursos', component: CursosComponent},
  { path: 'curso/:id', component: CursoDetalheComponent},
  { path: 'naoEncontrado', component: CursoNaoEncontradoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
