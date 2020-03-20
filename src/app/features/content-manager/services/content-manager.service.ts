import { SharedService } from './../../../shared/services/shared.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentManagerService {

  constructor(private SharedService: SharedService) { }

  getTemplates() {
    return this.SharedService.getTemplates()
  }

  createTemplate(templateName, message) {
    return this.SharedService.createTemplate(templateName, message)
  }
}
