import { Component } from '@angular/core';
import {Users} from '../users';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList {
  usuarios: any[] = [];

  constructor(private usuarioService: Users) {}

  ngOnInit() {
    this.usuarioService.getUsers().subscribe((data) => this.usuarios = data );
  }
}
