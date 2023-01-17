import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path:'', component: HomeComponent },
  //{ path: 'cursos', component: CursosComponent},
  //{ path: 'curso/:id', component: CursoDetalheComponent},
  //{ path: 'naoEncontrado', component: CursoNaoEncontradoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
