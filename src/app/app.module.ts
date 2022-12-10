import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { CreateAccountComponent } from './user-account/create-account/create-account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TreeComponent } from './tree/tree.component';
import { ConnectionsComponent } from './connections/connections.component';
import { MessagesComponent } from './messages/messages.component';
import { LoginComponent } from './user-account/login/login.component';
import { TreedetailsComponent } from './tree/treedetails/treedetails.component';
import { TreeitemComponent } from './tree/treeitem/treeitem.component';
import { TreelistComponent } from './tree/treelist/treelist.component';
import { TreeeditComponent } from './tree/treeedit/treeedit.component';
import { AppRoutingModule } from './app-routing.module';
import { DndModule } from 'ng2-dnd';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {TreeFilterPipe} from './tree/tree-filter.pipe';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComonent } from './common/loading-spinner.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { TreeService } from './tree/tree.service';
import { TreeDoToComponent } from './tree/treeToDoList/treetodolist.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserAccountComponent,
    CreateAccountComponent,
    TreeComponent,
    ConnectionsComponent,
    MessagesComponent,
    LoginComponent,
    TreedetailsComponent,
    TreeitemComponent,
    TreelistComponent,
    TreeeditComponent,
    TreeFilterPipe,
    AuthComponent,
    LoadingSpinnerComonent,
    TreeDoToComponent
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DndModule.forRoot(),
    HttpClientModule
  ],
  providers: [TreeService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
