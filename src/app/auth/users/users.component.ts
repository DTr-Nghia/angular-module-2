import { Component } from '@angular/core';
import { User } from '../shared/models/User';
import { TableModule } from 'primeng/table';
import { UserService } from '../user.service';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [TableModule, DialogModule, FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  userList: User[] = [];
  visible: boolean = false;
  submit = false;
  public userForm = {
    username: '',
    password: '',
    email: ''
  }
  constructor(private user: UserService) {
    this.reloadList()
  }
  onSubmit() {
    this.user.createUser(this.userForm).subscribe({
      next: data => {
        this.reloadList()
        this.visible = false
        alert(data.message)
      },
      error: error => {
        alert(error.message)
      }
    })
  }
  showDialog() {
    this.visible = true;
  }
  reloadList() {
    const tempList = JSON.parse(localStorage.getItem("userList") as string) || []
    const userId = JSON.parse(localStorage.getItem("token") as string) || []
    this.userList = tempList.filter((user: User) => user.id !== userId)
  }
  deleteUser(id: number) {
    this.user.deleteUser(id)
    this.reloadList()
  }
}
