# Rotas

Aprendendo a programar rotas com Angular2

## Estudo:

- Rotas Simples
- Definindo e extraindo parâmetros de roteamento
- Escutando mudanças nos parâmetros de roteamento
- Aplicando CSS em rotas ativas
- Rotas Imperativas
- Modo de funcionalidade
- Rotas filhas 
- Guarda de Rotas: CanActivate e CanActivateChild


## Comandos (alguns)

- RouterLink
- RouterLinkActive
- path: 'xxxxx', component: _nome_do_componente_
- this.router.navigate(['/xxxxxx']); --> redireciona a rota para outro component


### OBs:
Para projetos com bastante componentes, é necessário criar um routing e um modulo para cada um, assim o APP.Module não fica sobrecarregado 

Guarda de Rotas (Guard) -> Geralmente utilizamos esse guarda quando não queremos que usuário não autorizado navegue para nenhuma das rotas do módulo e também pare depois até mesmo.  
-CanActivate: impede que usuários não autorizados acessem a rota, verifica a rota base do módulo
-CanActivateChild: Verifica se o usuário pode visitar uma rota filha.

No caso deste projeto, se o usuário não estiver logado ele não deixa acessar a tela de cursos, alunos ou ''.