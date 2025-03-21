import {
  Component,
  computed,
  signal
} from '@angular/core';
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
    selectedUser = signal(DUMMY_USERS[randomIndex]);
    imagePath = computed(() => IMAGE_PREFIX + this.selectedUser().avatar)


  onSelectUser() {
      const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
      this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
