import { HomeComponent } from "./Home/Home.component";
import { ListsComponent } from "./Lists/Lists.component";
import { Routes } from "@angular/router";
import { MemberListComponent } from "./Member-list/Member-list.component";
import { MessagesComponent } from "./Messages/Messages.component";
import { AuthGuard } from './_Guards/auth.guard';

export const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  {
    path:'',
    runGuardsAndResolvers:'always',
    canActivate:[AuthGuard],
    children:[
        { path: "lists", component: ListsComponent },
        { path: "members", component: MemberListComponent },
        { path: "messages", component: MessagesComponent }
    ]

  },

  
  { path: "**", redirectTo: "", pathMatch: "full" },
];
