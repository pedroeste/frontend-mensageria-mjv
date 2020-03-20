import { Template } from './../../../models/template.model';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-template-dialog',
  templateUrl: './delete-template-dialog.component.html',
  styleUrls: ['./delete-template-dialog.component.scss']
})
export class DeleteTemplateDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteTemplateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Template
  ) { }

  ngOnInit(): void {
    console.log(this.data)
  }

  deleteTemplate() {
    console.log(this.data)
  }

  closeDialog() {
    this.dialogRef.close()
  }
}
