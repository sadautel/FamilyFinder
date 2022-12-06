import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TreeComponent } from "./tree/tree.component";
import { ConnectionsComponent } from "./connections/connections.component";
import { MessagesComponent } from "./messages/messages.component";
import { TreedetailsComponent } from "./tree/treedetails/treedetails.component";
import { TreeeditComponent } from "./tree/treeedit/treeedit.component";
import { LoginComponent } from "./user-account/login/login.component";
import { CreateAccountComponent } from "./user-account/create-account/create-account.component";

const appRoutes:  Routes = [
    {path: '', redirectTo:'/tree', pathMatch: 'full'},
    {path: 'connections', component: ConnectionsComponent},
    {path: 'messages',   component: MessagesComponent},
    {path: 'tree',  component: TreeComponent,
    children: [
        {
          path: 'new',
          component: TreeeditComponent,
        },
        {
          path: ':id',
          component: TreedetailsComponent,
        },
        {
          path: ':id/edit',
          component: TreeeditComponent,
        },
      ], 

},

    {path: 'user-account', component: LoginComponent, 
    children: [
        {
          path: 'new',
          component: CreateAccountComponent,
        }
      ], }

];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}