import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  output,
  Output,
} from '@angular/core';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// };

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent],
})
export class UserComponent {
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;

  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return '../../assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }

  // id = input.required<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => '../../assets/users/' + this.avatar());
  // select = output<string>();

  // onSelectUser() {
  //   this.select.emit(this.id());
  // }
}
