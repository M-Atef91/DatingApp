import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {
@Input() userinput:User;
  constructor() { }

  ngOnInit() {
  }

}
