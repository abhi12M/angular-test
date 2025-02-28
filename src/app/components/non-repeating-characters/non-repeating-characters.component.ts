import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-non-repeating-characters',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './non-repeating-characters.component.html',
  styleUrl: './non-repeating-characters.component.scss'
})
export class NonRepeatingCharactersComponent {
  data: string = '';
  output: string = '';

  find() {
    let arrData = this.data?.split('');
    this.output = '';
    this.output = arrData?.filter((arr, i) => arrData.indexOf(arr) == i)?.join('');
  }
}
