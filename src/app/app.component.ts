import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { menuList } from './shared/Items/menu-list';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  title = 'proyectox';
  open = false;
  @ViewChild('sidenav', { static: false })
  sidenav!: MatSidenav;
  sidenavSmall = true;
  sideMenu = menuList;
  collapse = true;
  toggleSidebar() {
    this.collapse = !this.collapse;
    this.open =!this.open;
    this.sidenavSmall = !this.sidenavSmall;

  }
}
