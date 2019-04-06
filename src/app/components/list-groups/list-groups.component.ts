import { Component, OnInit } from '@angular/core';
import { GroupsService } from './../../services/groups/groups.service';

@Component({
  selector: 'app-list-groups',
  templateUrl: './list-groups.component.html',
  styleUrls: ['./list-groups.component.scss'],
})
export class ListGroupsComponent implements OnInit {

  public data = [];

  constructor(private groupsService: GroupsService) { }

  ngOnInit() {
    this.groupsService.getAll().subscribe(res => {
      this.data = res['data'];
    });
  }

}
