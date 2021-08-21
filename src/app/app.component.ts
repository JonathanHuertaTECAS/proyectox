import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { menuList } from './components/base/Items/Models/menu-list';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
