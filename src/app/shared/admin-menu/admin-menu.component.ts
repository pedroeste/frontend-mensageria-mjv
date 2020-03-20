import { Component, OnInit, Input } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.scss']
})
export class AdminMenuComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;

  faSearch = faSearch;

  constructor() { }

  ngOnInit(): void {
  }

  search() {
    console.log('search');
  }

}
