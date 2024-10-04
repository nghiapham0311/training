import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserModel } from '../../model/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.scss'],
})
export class EditUserDialogComponent implements OnInit {
  currentUser!: UserModel;
  currentUserName: string = '';
  userFormGroup!: FormGroup;
  selectedImage!: File;
  imageBase64!: string | ArrayBuffer | null;

  constructor(@Inject(MAT_DIALOG_DATA) private data: { currentUser: UserModel, currentUserName: string }, private userService: UserService) { }

  ngOnInit(): void {
    this.currentUser = this.data.currentUser;
    this.currentUserName = this.data.currentUserName;
    this.buildData();
  }

  buildData() {
    this.userFormGroup = new FormGroup({
      userId: new FormControl(this.currentUserName),
      department: new FormControl(this.currentUser.department, Validators.required),
      title: new FormControl(this.currentUser.title, Validators.required),
      skillHightlight: new FormControl('Skill Hightlight'),
      experienceYear: new FormControl(this.currentUser.experienceYear, Validators.required),
    });
  }

  uploadImage(event: any) {
    if (event.target.files && event.target.files.length) {
      this.selectedImage = event.target.files[0];
      console.log('this.selectedImage ', this.selectedImage);
      let reader = new FileReader();
      reader.readAsDataURL(this.selectedImage);
      reader.onload = () => {
        this.imageBase64 = reader.result;
      };
    }
  }

  submitForm() {
    this.currentUser.department = this.userFormGroup.controls["department"].value;
    this.currentUser.title = this.userFormGroup.controls["title"].value;
    this.currentUser.experienceYear = this.userFormGroup.controls["experienceYear"].value;
    // Upload avatar if exist
    if (this.selectedImage) {
      this.uploadAvatar();
    }
    // Update profile
    this.userService.updateProfile(this.currentUser).subscribe({
      next: res => {
        console.log('Update profile response', res)
      }
    });
  }

  uploadAvatar() {
    this.userService.uploadAvatar(this.selectedImage).subscribe({
      next: res => {
        console.log('Upload avatar response', res)
      }
    });
  }
}
