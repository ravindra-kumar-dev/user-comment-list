import { Component }  from '@angular/core';
import { DUMMY_USERS } from "../dummy-users";


const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
const IMAGE_PREFIX = "assets/users/";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
    selectedUser = DUMMY_USERS[randomIndex];

    get imagePath() {
      return IMAGE_PREFIX + this.selectedUser.avatar;
    }

    onSelectUser() {
      const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
      this.selectedUser = DUMMY_USERS[randomIndex];
    }
}
