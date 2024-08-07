import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { fileURLToPath } from 'node:url';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) { }
title = (this.router.url).slice(1)

isMenuVisible = false;

toggleMenu() {
  this.isMenuVisible = !this.isMenuVisible;
}

@HostListener('window:resize', ['$event'])
onResize(event: any) {
  if (event.target.innerWidth > 1024) { 
    this.isMenuVisible = false;
  }
}

onSelect(option: string) {
  console.log(`Selected option: ${option}`);
  this.isMenuVisible = false; 
}


}


