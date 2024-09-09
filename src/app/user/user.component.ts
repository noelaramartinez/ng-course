import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

interface User{
  name: string,
  avatar: string,
  id: string,
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required:true}) user!:User
  @Output() select = new EventEmitter;

  onSelectUser(user: User) {
    this.select.emit(this.user.id)
  }

  selectedUser = DUMMY_USERS

  imagePath = 'assets/users/'

}
