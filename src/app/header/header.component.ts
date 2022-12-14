import { Component, EventEmitter, OnDestroy, OnInit, Output } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "../auth/auth.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{
  private userSub: Subscription;
  isAuth = false;
  collapsed = true;

  constructor(private authService: AuthService) {}
  @Output() selectedFeatureEvent = new EventEmitter<string>();
    
  onSelect(selectedEvent: string){
      this.selectedFeatureEvent.emit(selectedEvent);
  }

  ngOnInit(){
    this.userSub = this.authService.user.subscribe( user => {
      this.isAuth = !user ? false : true;
    });
  }

  onLogout(){
    this.authService.logout();
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }



}
