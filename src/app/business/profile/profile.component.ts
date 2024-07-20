import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { AddUserDialogComponent } from '../../shared/components/add-user-dialog/add-user-dialog.component';

interface User {
  id: number;
  nombre: string;
  roles: string;
  estado: string;
  vencimiento: string;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [AddUserDialogComponent, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export default class ProfileComponent {
  users: User[] = [
    {
      id: 1,
      nombre: "Mauricio Henao",
      roles: "Administrador",
      estado: "Activo",
      vencimiento: "14/06/2030"
    },
    {
      id: 2,
      nombre: "Veronica Sierra",
      roles: "Administrador",
      estado: "Activo",
      vencimiento: "25/03/2050"
    },
    {
      id: 3,
      nombre: "David Zapata",
      roles: "Asesor",
      estado: "Inactivo",
      vencimiento: "22/05/2022"
    },
    {
      id: 4,
      nombre: "Santiago Yosa",
      roles: "Administrador",
      estado: "Activo",
      vencimiento: "10/09/2040"
    },
    {
      id: 5,
      nombre: "Javier Garcia",
      roles: "Administrador",
      estado: "Activo",
      vencimiento: "01/01/2025"
    }
  ];

  constructor(public dialog: MatDialog) {}

  openAddUserDialog(): void {
    const dialogRef = this.dialog.open(AddUserDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Aquí deberías agregar el nuevo usuario a tu array o base de datos
        console.log('New user:', result);
        this.users.push(result);
      }
    });
  }

  openEditUserDialog(user: User): void {
    const dialogRef = this.dialog.open(AddUserDialogComponent, {
      width: '400px',
      data: { ...user } // Pasamos una copia del usuario para evitar modificaciones directas
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Aquí manejarías la actualización del usuario
        console.log('Usuario actualizado:', result);
        // Actualiza el usuario en el array
        const index = this.users.findIndex(u => u.id === result.id);
        if (index !== -1) {
          this.users[index] = result;
          this.users = [...this.users]; // Esto trigger la detección de cambios
        }
      }
    });
  }

  deleteUser(user: User): void {
    // Aquí puedes agregar lógica adicional, como una confirmación del usuario
    const index = this.users.findIndex(u => u.id === user.id);
    if (index !== -1) {
      this.users.splice(index, 1);
      this.users = [...this.users]; // Esto trigger la detección de cambios
    }
  }
}