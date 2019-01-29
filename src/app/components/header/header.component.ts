import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  isResponsiveMenuOpened: boolean;

  toggleBurger(): void {
    this.isResponsiveMenuOpened = !this.isResponsiveMenuOpened;
  }
}
