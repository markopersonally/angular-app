import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  output,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  // @Output() select = new EventEmitter<string>();
  // get imagePath() {
  //   return '../../assets/users/' + this.avatar;
  // }

  id = input.required<string>();
  avatar = input.required<string>();
  name = input.required<string>();
  imagePath = computed(() => '../../assets/users/' + this.avatar());
  select = output<string>();

  onSelectUser() {
    this.select.emit(this.id());
  }
}
