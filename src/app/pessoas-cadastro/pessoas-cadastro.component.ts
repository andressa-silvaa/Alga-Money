import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';

@Component({
  selector: 'app-pessoas-cadastro',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    InputNumberModule,
    InputMaskModule
  ],
  templateUrl: './pessoas-cadastro.component.html',
  styleUrl: './pessoas-cadastro.component.scss'
})
export class PessoasCadastroComponent {
  tipos = [
    {label : 'Receita' , value: 'RECEITA'},
    {label : 'Despesa' , value: 'DESPESA'}
  ];

  categorias = [
    {label : 'Selecione uma categoria' , value: 1},
    {label : 'Alimentação' , value: 2},
    {label : 'Transporte' , value: 3}
  ];

  pessoas = [
    {label : 'Selecione uma pessoa' , value: 1},
    {label : 'João da Silva' , value: 2},
    {label : 'Sebastião Souza' , value: 3},
    {label : 'Maria Abadia' , value: 4}
  ];

  tipoSelecionado = 'RECEITA';
  categoriaSelecionada = 1;
  pessoaSelecionada = 1;

  applyMask(event: any){
    let value = event.target.value.replace(/\D/g, '');

    if (value.length >= 2) {
      value = value.replace(/^(\d{2})/, '$1/');
    }
    if (value.length >= 5) {
      value = value.replace(/^(\d{2})\/(\d{2})/, '$1/$2/');
    }
    if (value.length > 10) {
      value = value.slice(0, 10);
    }
    event.target.value = value;
  }

}
