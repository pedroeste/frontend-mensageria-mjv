import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { Template } from 'src/app/models/template.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-template-dialog',
  templateUrl: './edit-template-dialog.component.html',
  styleUrls: ['./edit-template-dialog.component.scss']
})
export class EditTemplateDialogComponent implements OnInit {

  templateForm = new FormGroup({
    templateName: new FormControl(this.data.templateName),
    message: new FormControl(this.data.message)
  })

  constructor(
    public dialogRef: MatDialogRef<EditTemplateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Template
  ) { }

  ngOnInit(): void {
    console.log(this.data)
  }

  editTemplate() {
    console.log(this.templateForm.value)
  }

  closeDialog() {
    this.dialogRef.close()
  }

}
