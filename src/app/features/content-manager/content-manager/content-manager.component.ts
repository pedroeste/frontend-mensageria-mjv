import { Template } from './../../../models/template.model';
import { DeleteTemplateDialogComponent } from './../delete-template-dialog/delete-template-dialog.component';
import { ContentManagerService } from './../services/content-manager.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { EditTemplateDialogComponent } from '../edit-template-dialog/edit-template-dialog.component';

@Component({
  selector: 'app-content-manager',
  templateUrl: './content-manager.component.html',
  styleUrls: ['./content-manager.component.scss']
})

export class ContentManagerComponent implements OnInit {

  templates: Template

  constructor(
    private ContentManagerService: ContentManagerService,
    private toastr: ToastrService,
    private dialog: MatDialog) { }

  displayedColumns: string[] = ['templateName', 'message', 'variables', 'actions'];

  ngOnInit() {
    this.ContentManagerService.getTemplates()
      .subscribe((data: Template) => {
        this.templates = data
        console.log(this.templates)
      }, () => {
        this.toastr.error('Erro na requisiçāo, tente novamente')
      })
  }

  openEditDialog(element: Template) {
    const dialogRef = this.dialog.open(EditTemplateDialogComponent, {
      width: '50%',
      height: '50%',
      data: element
    });

    dialogRef.afterClosed().subscribe()
  }

  openDeleteDialog(element: Template) {
    const dialogRef = this.dialog.open(DeleteTemplateDialogComponent, {
      width: '50%',
      height: '50%',
      data: element
    });

    dialogRef.afterClosed().subscribe()
  }

}
