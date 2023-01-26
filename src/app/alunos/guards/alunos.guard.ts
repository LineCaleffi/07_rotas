import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunosGuard implements CanActivateChild {

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log('Alunos Guard: Garda de rota filha');
    
    // Mostra uma mensagem de alerta e não deixa o usuário editar os alunos cadastrados.
    if(state.url.includes('editar')){
      // alert('Usuário sem acesso');
      // return false; // Observable.of(false) -> chamada assíncrona
    }

    return true;

  }
  
}
