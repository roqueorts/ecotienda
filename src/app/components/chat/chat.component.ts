import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { CompileMetadataResolver } from '@angular/compiler';
// import { endTimeRange } from '@angular/core/src/profile/wtf_impl';
import { endianness } from 'os';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public mensaje: string;
  public element: any;
  constructor(public cs: ChatService) {
    this.cs.cargarMensajes().subscribe(() => {
      // hacemos un timeout para darle tiempo a que angular primero renderice el HTML con los chats
      setTimeout(() => {
        this.element.scrollTop = this.element.scrollHeight;
      }, 20);
    });
  }

  ngOnInit() {
    this.mensaje = '';
    this.element = document.getElementById('app-mensajes');
  }

  enviarMensaje() {
    console.log(this.mensaje);
    if (this.mensaje.length > 0) {
      this.cs
        .agregarMensaje(this.mensaje)
        .then(() => {
          console.log('Mensaje enviado');
          this.mensaje = '';
        })
        .catch(err => console.error('Error al enviar', err));
    }
  }
}
