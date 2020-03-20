import { FormGroup, FormControl } from '@angular/forms';
import { TransferService } from './services/transfer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
})


export class TransferComponent implements OnInit {

  transactionForm = new FormGroup({
    name: new FormControl(),
    document: new FormControl(),
    agency: new FormControl(),
    account: new FormControl(),
    value: new FormControl()
  })

  constructor(private transferService: TransferService) { }

  ngOnInit(): void {
  }

  submitForm() {
    return this.transferService.postTransaction()
  }
}
