import { Subscription } from 'rxjs';
import { AlunosService } from './../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy{

  aluno: any;
  inscricao: Subscription = new Subscription;

  constructor(private activatedRoute: ActivatedRoute,
              private alunosService: AlunosService,
              private router: Router){}
  
  ngOnInit() {
   /*
    this.inscricao = this.activatedRoute.params.subscribe((params: any)=>{
      let id = params['id'];

      this.aluno = this.alunosService.getAluno(id);
    })
    */

    console.log('ngInit: AlunoDetalheComponent');

    this.inscricao = this.activatedRoute.data.subscribe((info) => {
      console.log(info);
      this.aluno = info['aluno'];
  });
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  // Redirecionando para editar 
  editarAluno(){
    this.router.navigate(['/alunos', this.aluno.id, 'editar'])
  }
}
