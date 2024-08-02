import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-add-user-dialog',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    FooterComponent,
  ],
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.css']
})
export class AddUserDialogComponent implements OnInit {
  userForm: FormGroup;
  isEditMode: boolean;

  constructor(
    public dialogRef: MatDialogRef<AddUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.isEditMode = !!data;
    this.userForm = this.fb.group({
      id: [data?.id || null],
      nombre: [data?.nombre || '', Validators.required],
      roles: [data?.roles || '', Validators.required],
      estado: [data?.estado || '', Validators.required], // Cambiado a string vacío por defecto
      vencimiento: [data?.vencimiento || '', Validators.required]
    });
  }

  ngOnInit() {
    if (this.isEditMode) {
      this.userForm.patchValue(this.data);
    }
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.dialogRef.close(this.userForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}