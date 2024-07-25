import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatInputModule, MatButtonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  @Output() search = new EventEmitter<string>();

  text = '';

  onTyping(event: any) {
    // console.log('on key press :', event.target.value);
    this.text = event.target.value;
  }

  inputChange(event: any) {
    console.log('on input change :', event.target.value);
  }

  onSearch() {
    console.log('on search call');
    this.search.emit(this.text);
  }
}
