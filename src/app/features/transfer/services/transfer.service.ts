import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../../environments/environment';

const body = {
  idTransacao: "9087650098976a",
  valorTransacao: 49.75,
  codigoTemplate: "DOC",
  canalEnviado: "Internet Banking",
  contaDebitada:
  {
    nome: "Nome do Cliente",
    documento: "39618299856",
    codigoCliente: "1",
    tipoConta: "Conta Corrente",
    agencia: "44110-1",
    conta: "0000-1"
  },
  contaCreditada: {
    nome: "Nome do Cliente",
    documento: "05150482838",
    codigoBanco: "001",
    agencia: "44110-1",
    conta: "0000-1"
  }
}

@Injectable({
  providedIn: 'root'
})

export class TransferService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  postTransaction() {
    return this.http.post(`${this.baseUrl}/transaction`, body)
      .subscribe((data: string) => {
        this.toastr.success(data)
      }, () => {
        this.toastr.error('Erro na transaçāo, tente novamente.')
      })
  }
}
