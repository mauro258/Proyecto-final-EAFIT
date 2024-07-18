import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUserDialogComponent } from '../../shared/components/add-user-dialog/add-user-dialog.component';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [AddUserDialogComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export default class ProfileComponent {
  constructor(public dialog: MatDialog) {}

  openAddUserDialog(): void {
    const dialogRef = this.dialog.open(AddUserDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // Puedes manejar el resultado aquí
    });
  }
}
