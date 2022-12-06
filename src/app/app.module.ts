import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BackgroundComponent } from './background/background.component';
import { LayoutComponent } from './layout/layout.component';
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
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
import { AppRoutingModule } from './app-routing.module';
import { DndModule } from 'ng2-dnd';
import { HttpClientModule } from '@angular/common/http';
import {TreeFilterPipe} from './tree/tree-filter.pipe';
import { NewtreeComponent } from './tree/newtree/newtree.component';
import { AuthComponent } from './auth/auth.comonent';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BackgroundComponent,
    LayoutComponent,
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
    NewtreeComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TreeGridModule,
    AppRoutingModule,
    DndModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
