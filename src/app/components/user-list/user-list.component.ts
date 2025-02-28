import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  private api = inject(ApiService);
  userList: any[] = [];
  filteredUserList: any[] = [];

  constructor() {

  }

  ngOnInit() {
    this.getUserList();
  }

  getUserList() {
    this.api.getList('users').subscribe(res => {
      if (res?.length) {
        this.userList = res;
        this.filteredUserList = this.userList;
      }
    });
  }

  search(event: any) {
    this.filteredUserList = this.userList?.filter(user => user.name.toLowerCase().includes(event.target.value?.toLowerCase()));
  }
}
