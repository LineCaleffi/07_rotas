import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit{
  
  cursos: any[] = [];
  pagina: number = 0;
  inscricao: Subscription = new Subscription;

  constructor(private cursosService: CursosService,
              private activatedRoute: ActivatedRoute,
              private router: Router ){}

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();

    this.inscricao = this.activatedRoute.queryParams.subscribe((queryParams: any) => {
      this.pagina = queryParams['pagina'];
    });
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  proximaPagina(){
    //this.pagina++;
    // quando clicar no botão muda no paragrafo e na URL
    this.router.navigate(['/cursos'], { 
      queryParams: {'pagina': ++this.pagina}
    });
  }

}
