import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TreeComponent } from "./tree/tree.component";
import { ConnectionsComponent } from "./connections/connections.component";
import { MessageListComponent } from './messages/message-list/message-list.component';
import { TreedetailsComponent } from "./tree/treedetails/treedetails.component";
import { TreeeditComponent } from "./tree/treeedit/treeedit.component";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuard } from "./auth/auth.guard";


const appRoutes:  Routes = [
    {path: '', redirectTo:'/tree', pathMatch: 'full'},
    {path: 'connections', component: ConnectionsComponent},
    {path: 'messages',   component: MessageListComponent},

    {path: 'tree',  component: TreeComponent,
    canActivate: [AuthGuard],
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

    {path: 'auth', component: AuthComponent},
];



@NgModule({
    imports: [ RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}