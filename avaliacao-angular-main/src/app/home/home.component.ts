import { Component } from '@angular/core';
import { ContaService } from '../services/conta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  saldoAtual: number = 0;
  deposito: number = 0
  saque: number = 0
  constructor(){
  }

  //este método deve aumentar o saldo atual em um valor X
  depositar(): void{
    this.saldoAtual+=this.deposito
    this.deposito=0
    this.saque=0
  }

  //este método deve diminuir o saldo atual em um valor X
  sacar(): void{
    if(this.saque<=this.saldoAtual){
      this.saldoAtual -= this.saque
    }else{
      alert('Saldo Insuficiente')
    }
    this.deposito=0
    this.saque=0
  }
  
}
