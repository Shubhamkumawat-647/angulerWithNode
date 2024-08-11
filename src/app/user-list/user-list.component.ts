import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import axios from 'axios';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users: any[] = [];
  apiUrl = 'http://localhost:3000/users/get';
  isListVisible = false
  
  constructor() {}

  showUserList() {
    if (this.isListVisible) {
      this.isListVisible = false;
    }else{
    axios.get(this.apiUrl)
      .then(response => {
        this.users = response.data;
        this.isListVisible = true;
      })
      .catch(error => {
        console.error('Error fetching user list', error);
      });
  }
}
}
