import { Component } from '@angular/core';
import { ClientHeaderComponent } from "../client-header/client-header.component";
import { ClientSidebarComponent } from "../client-sidebar/client-sidebar.component";
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-client-layout',
  standalone: true,
  imports: [ClientHeaderComponent, ClientSidebarComponent, FooterComponent, RouterOutlet],
  templateUrl: './client-layout.component.html',
  styleUrl: './client-layout.component.css'
})
export class ClientLayoutComponent {

}
