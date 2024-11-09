import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-lancamentos-cadastro',
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
    InputNumberModule
  ],
  templateUrl: './lancamentos-cadastro.component.html',
  styleUrls: ['./lancamentos-cadastro.component.scss'],
})
export class LancamentosCadastroComponent {
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
  salvar(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      // Implementar lógica de salvamento
    }
  }
}
