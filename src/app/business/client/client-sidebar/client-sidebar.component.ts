import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-client-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './client-sidebar.component.html',
  styleUrl: './client-sidebar.component.css'
})
export class ClientSidebarComponent {

}
