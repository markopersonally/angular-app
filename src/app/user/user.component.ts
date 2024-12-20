import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
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
  id = input.required<string>();
  avatar = input.required<string>();
  name = input.required<string>();
  imagePath = computed(() => '../../assets/users/' + this.avatar());
  @Output() select = new EventEmitter();

  // get imagePath() {
  //   return '../../assets/users/' + this.avatar;
  // }

  onSelectUser() {
    this.select.emit(this.id);
  }
}
