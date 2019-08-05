import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Mensaje } from '../interfaces/mensaje.interface';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  public chats: Mensaje[];
  public usuario: any = {};

  constructor(private afs: AngularFirestore, public afAuth: AngularFireAuth) {
    // Este angularFire Auth es otra forma diferente
    // de autenticarse, habrá que ver si es mejor que aunthservice, y ponerlo en el login del NAV en vez de aquí
    afAuth.authState.subscribe(user => {
      console.log('Estado del usuario: ', user);

      if (user) {
        this.usuario.nombre = user.displayName;
        this.usuario.uid = user.uid;
      } else {
        return;
      }
    });
  }

  login(proveedor: string) {
    // habrá que ver si es mejor que aunthservice, y ponerlo en el login del NAV en vez de aquí, osea en el HOME
    if (proveedor === 'google') {
      this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()); // se puede cambiar por facebookProvideer etc...
    } else {
      this.afAuth.auth.signInWithPopup(new auth.TwitterAuthProvider()); // se puede cambiar por facebookProvideer etc...
    }
  }
  logout() {
    this.usuario = {};
    this.afAuth.auth.signOut();
  }

  cargarMensajes() {
    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref => {
      return ref.orderBy('fecha', 'desc').limit(5);
    });
    // El map recibe la respuesta del observable, la modifica y la vuelve a devolver como observable(para poder subscribirse)
    return this.itemsCollection.valueChanges().pipe(
      map((mensajes: Mensaje[]) => {
        // console.log(mensajes);
        this.chats = [];
        for (const mensaje of mensajes) {
          this.chats.unshift(mensaje);
        }
        // Si necesito devolver los chats a la llamada que hace el componente, haría un return this.chats
      })
    );
  }

  agregarMensaje(texto: string) {
    // TODO falta el UID del usuario
    const mensaje: Mensaje = {
      nombre: this.usuario.nombre,
      mensaje: texto,
      fecha: new Date().getTime(),
      uid: this.usuario.uid
    };
    return this.itemsCollection.add(mensaje);
  }
}
