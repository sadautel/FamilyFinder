import { Component, OnInit } from '@angular/core';
import { UserAccount } from '../user-account.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newUserAccount = new UserAccount(
      value.id,
      value.name,
      value.email,
      value.password,
      
    );
  }

  onCancel() {
    
  }
}
