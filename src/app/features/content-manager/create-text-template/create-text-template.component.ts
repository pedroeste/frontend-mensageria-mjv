import { ContentManagerService } from './../services/content-manager.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-text-template',
  templateUrl: './create-text-template.component.html',
  styleUrls: ['./create-text-template.component.scss']
})

export class CreateTextTemplateComponent implements OnInit {

  templateForm = new FormGroup({
    formName: new FormControl(),
    message: new FormControl()
  })

  constructor(private ContentManagerService: ContentManagerService) { }

  ngOnInit(): void {
  }

  createTemplate() {
    return this.ContentManagerService
      .createTemplate(this.templateForm.value.formName, this.templateForm.value.message)
  }

}
