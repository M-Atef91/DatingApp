import { HomeComponent } from "./Home/Home.component";
import { ListsComponent } from "./Lists/Lists.component";
import { Routes } from "@angular/router";
import { MemberListComponent } from "./member/Member-list/Member-list.component";
import { MessagesComponent } from "./Messages/Messages.component";
import { AuthGuard } from "./_Guards/auth.guard";
import { UnauthGuard } from "./_Guards/unauth.guard";
import { MemberDetailsComponent } from "./member/member-details/member-details.component";
import { MemberDetailsResolver } from "./_Resolvers/member-details.resolver";
import { MemberListResolver } from "./_Resolvers/member-list.resolver";
import { MemberUserEditComponent } from './member/member-user-edit/member-user-edit.component';
import { MemberEditResolver } from './_Resolvers/member-edit.resolver';
import { DeactiveGuard } from './_Guards/deactive.guard';

export const appRoutes: Routes = [
  { path: "", component: HomeComponent, canActivate: [UnauthGuard] },
  {
    path: "",
    runGuardsAndResolvers: "always",
    canActivate: [AuthGuard],
    children: [
      { path: "lists", component: ListsComponent },
      {
        path: "members",
        component: MemberListComponent,
        resolve: {
          users: MemberListResolver,
        },
      },
      {
        path: "members/:id",
        component: MemberDetailsComponent,
        resolve: {
          user: MemberDetailsResolver,
        },
      },
      {
        path:"member/edit",
        component:MemberUserEditComponent,
        resolve:{
          user:MemberEditResolver,
        },
        canDeactivate:[DeactiveGuard]

      },
      { path: "messages", component: MessagesComponent },
    ],
  },

  { path: "**", redirectTo: "", pathMatch: "full" },
];
