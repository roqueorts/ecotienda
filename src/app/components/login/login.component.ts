import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  constructor(public cs: ChatService) {}

  ngOnInit() {}

  ingresar(proveedor: string) {
    this.cs.login(proveedor);
  }
}
