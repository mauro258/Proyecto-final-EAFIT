import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { fileURLToPath } from 'node:url';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) {
    if (this.title == 'landing-page') {
      this.hiddenToggle = false
    }
   }
  title = (this.router.url).slice(1)

  isMenuVisible = false;
  hiddenToggle = true;

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth > 1024) {
      this.isMenuVisible = false;
/*       if (this.title == 'landing-page') {
        this.hiddenToggle = false
      } */
    }
  }

  onSelect(option: string) {
    console.log(`Selected option: ${option}`);
    this.isMenuVisible = false;
  }


}


