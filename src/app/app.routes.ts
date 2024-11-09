import { Routes } from '@angular/router';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { LancamentosCadastroComponent } from './lancamentos-cadastro/lancamentos-cadastro.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PessoasCadastroComponent } from './pessoas-cadastro/pessoas-cadastro.component';

export const routes: Routes = [
  {
    path: "",
    component: LancamentosPesquisaComponent
  },{
    path: "lancamentos",
    component: LancamentosPesquisaComponent
  },{
    path: "pessoas-cadastro",
    component: PessoasCadastroComponent
  },{
    path: "lancamentos-cadastro",
    component: LancamentosCadastroComponent
  }
];
