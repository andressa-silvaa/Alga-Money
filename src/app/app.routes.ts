import { Routes } from '@angular/router';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { NavbarComponent } from './navbar/navbar.component';
export const routes: Routes = [
  {
    path: "lancamentos",
    component: LancamentosPesquisaComponent
  },{
    path: "menu",
    component: NavbarComponent
  }
];
