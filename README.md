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
- Guarda de Rotas: CanActivate(Aula #64), CanActivateChild(Aula #65), CanDeactivate(Aula #66e67), Resolve(Aula #68), CanLoad(Aula #69)
- Estilo de URL - adiciona hashtag na URL (Aula #71)


## Comandos (alguns)

- RouterLink
- RouterLinkActive
- path: 'xxxxx', component: _nome_do_componente_
- this.router.navigate(['/xxxxxx']); --> redireciona a rota para outro component
- ng g guard guards/auth -> Cria uma nova guarda de rota 
- Ng g i <nome_inteface> -> cria uma nova interface automático
- {useHash: true} -> mostra na url /#/xxxxx


### OBs:
Para projetos com bastante componentes, é necessário criar um routing e um modulo para cada um, assim o APP.Module não fica sobrecarregado 

Guarda de Rotas (Guard) -> Geralmente utilizamos esse guarda quando não queremos que usuário não autorizado navegue para nenhuma das rotas do módulo e também pare depois até mesmo:
- CanActivate impede que usuários não autorizados acessem a rota. 
- CanActivateChild: verifica se o usuário pode visitar uma rota filha; 
- CanDeactivate: verifica se o usuário pode sair da rota; 
- Resolve: carregando dados antes da rota ser ativada
- CanLoad: como não carregar o módulo sem permissão

No caso deste projeto, se o usuário não estiver logado ele não deixa acessar a tela de cursos, alunos ou ''.