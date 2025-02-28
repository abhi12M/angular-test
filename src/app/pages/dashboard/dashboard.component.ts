import { Component } from '@angular/core';
import { UserListComponent } from '../../components/user-list/user-list.component';
import { ComplexReactiveFormComponent } from '../../components/complex-reactive-form/complex-reactive-form.component';
import { PostsListComponent } from '../../components/posts-list/posts-list.component';
import { ReactiveFormComponent } from '../../components/reactive-form/reactive-form.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NonRepeatingCharactersComponent } from '../../components/non-repeating-characters/non-repeating-characters.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    UserListComponent,
    ComplexReactiveFormComponent,
    PostsListComponent,
    ReactiveFormComponent,
    CommonModule,
    NonRepeatingCharactersComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  userName: string | null = '';

  constructor(private router: Router) {
    this.userName = localStorage.getItem('userName');
  }

  logout() {
    localStorage.removeItem('userName');
    this.router.navigate(['login']);
  }

}
