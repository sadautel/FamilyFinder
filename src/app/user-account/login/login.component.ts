import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserAccount } from '../user-account.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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

  @Output() selectedFeatureEvent = new EventEmitter<string>();

    onSelect(selectedEvent: string){
        this.selectedFeatureEvent.emit(selectedEvent);
    }

    selectedFeature: string = 'tree'

  switchView(selectedFeature: string) {
    this.selectedFeature = selectedFeature;
  }

}
