import { Component } from '@angular/core';
import { ClientSidebarComponent } from '../client-sidebar/client-sidebar.component';
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";

@Component({
  selector: 'app-client-portal',
  standalone: true,
  imports: [ClientSidebarComponent, HeaderComponent, FooterComponent],
  templateUrl: './client-portal.component.html',
  styleUrl: './client-portal.component.css'
})
export class ClientPortalComponent {

}
