import { FormsModule } from '@angular/forms';
import { AlunosService } from './alunos.service';
import { AlunosComponent } from './alunos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosRoutingModule } from './alunos-routing.module';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosDeactiveGuard } from './guards/alunos-deactive.guard';
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';

@NgModule({
  declarations: [
    AlunosComponent,
    AlunoFormComponent,
    AlunoDetalheComponent
  ],
  imports: [
    CommonModule,
    AlunosRoutingModule,
    FormsModule
  ],
  providers: [AlunosService, AlunosDeactiveGuard, AlunoDetalheResolver]
})
export class AlunosModule { }
