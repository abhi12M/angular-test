import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.scss'
})
export class PostsListComponent {
  postList: any[] = [];
  private api = inject(ApiService);

  ngOnInit() {
    this.getPostList();
  }

  getPostList() {
    this.api.getList('posts').subscribe(res => {
      if (res?.length) {
        this.postList = res;
      }
    })
  }
}
