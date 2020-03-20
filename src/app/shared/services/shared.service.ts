import { Template } from './../../models/template.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment';

const user = {
  name: "Pedro",
  document: "39618299856",
  clientId: 1,
  password: "123456"
}

const accession = {
  clientId: "1",
  channel: "Internet Banking",
  transactionType: "DOC"
}

@Injectable({
  providedIn: 'root'
})

export class SharedService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  createUser() {
    return this.http.post(`${this.baseUrl}/users`, user)
      .subscribe((data: any) => {
        this.toastr.success(data)
      }, () => {
        this.toastr.error('Erro na requisição, tente novamente.')
      })
  }

  createAccession() {
    return this.http.post(`${this.baseUrl}/add-accession`, accession)
      .subscribe((data: any) => {
        this.toastr.success(data.message)
      }, () => {
        this.toastr.error('Erro na requisição, tente novamente.')
      })
  }

  createTemplate(templateName: string, message: string) {

    const template = {
      templateName: templateName,
      message: message
    }

    return this.http.post(`${this.baseUrl}/content`, template)
      .subscribe((data: any) => {
        this.toastr.success(data.message)
      }, () => {
        this.toastr.error('Erro na requisiçāo, tente novamente')
      })
  }


  getTemplates() {
    return this.http.get(`${this.baseUrl}/content`)
  }
}
