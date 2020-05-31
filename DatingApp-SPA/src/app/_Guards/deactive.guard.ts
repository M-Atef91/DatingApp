import { CanDeactivate } from "@angular/router";
import { MemberUserEditComponent } from "../member/member-user-edit/member-user-edit.component";
import { Injectable } from "@angular/core";
@Injectable()
export class DeactiveGuard implements CanDeactivate<MemberUserEditComponent> {
  constructor() {}
  canDeactivate( component: MemberUserEditComponent): boolean {
    if (component.editForm.dirty) {
        return confirm("unsave changes!!!");
    }
    return true;
  }
}
