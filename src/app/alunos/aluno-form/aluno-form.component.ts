
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, OnDestroy{
  aluno: any = {};
  inscricao: Subscription = new Subscription;

  constructor(private activatedRoute: ActivatedRoute,
              private alunosService: AlunosService,
              private router: Router){}

  ngOnInit() {
    this.inscricao = this.activatedRoute.params.subscribe((params: any)=>{
      let id = params['id'];

      this.aluno = this.alunosService.getAluno(id);

      //se o aluno for nulo inicia como vazio
      if(this.aluno === null){
        this.aluno = {};
      }
    })
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
}
