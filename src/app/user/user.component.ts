import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  output,
  Output,
} from '@angular/core';

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// };

interface User {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;

  @Input({ required: true }) user!: User;
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
