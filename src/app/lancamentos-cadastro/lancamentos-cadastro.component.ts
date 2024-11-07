import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-lancamentos-cadastro',
  standalone: true,
  imports: [InputTextModule,InputTextareaModule,ButtonModule],
  templateUrl: './lancamentos-cadastro.component.html',
  styleUrl: './lancamentos-cadastro.component.scss'
})
export class LancamentosCadastroComponent {

}
