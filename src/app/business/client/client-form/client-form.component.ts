import { Component } from '@angular/core';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { ClientSidebarComponent } from '../client-sidebar/client-sidebar.component';
import { ClientHeaderComponent } from "../client-header/client-header.component";

@Component({
  selector: 'app-client-form',
  standalone: true,
  imports: [ClientSidebarComponent, HeaderComponent, FooterComponent, ClientHeaderComponent],
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.css'
})
export class ClientFormComponent {

}
