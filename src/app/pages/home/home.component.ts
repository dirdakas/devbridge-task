import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface ICommentModel {
  firstName: string;
  lastName: string;
  comment: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  commentModel: ICommentModel = {
    comment: '',
    firstName: '',
    lastName: ''
  };

  inputMinLength = 3;
  textAreaMinLength = 10;
  inputMaxLength = 20;
  textAreaMaxLength = 60;

  isSubmitted: boolean;

  submitForm(): void {
    console.log(this.commentModel);
    this.isSubmitted = true;
  }
}
