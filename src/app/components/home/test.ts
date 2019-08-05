interface Evento {
  nombre: string;
  arrayDeCallBacks: any[];
}
export default class Emitter {
  arrayDeEventos: Evento[] = [];
  obs;
  evento: Evento;

  // Se ejecuta antes de renderizar
  constructor() {}

  subscribe(_myevent, funcionCallBack) {
    if (this.arrayDeEventos.find(a => a.nombre === _myevent)) {
      this.arrayDeEventos.find(a => a.nombre === _myevent).arrayDeCallBacks.push(funcionCallBack);
    } else {
      this.evento = { nombre: _myevent, arrayDeCallBacks: [] };
      this.evento.arrayDeCallBacks.push(funcionCallBack);
      this.arrayDeEventos.push(this.evento);
    }
  }

  emit(_myevent, ...args: any[]) {
    // return this.obs;
    const index = this.arrayDeEventos.findIndex(a => a.nombre === _myevent);
    if (index >= 0) {
      this.arrayDeEventos[index].arrayDeCallBacks.forEach(fn => fn(...args));
    }
    // this.obs(args);
  }
}
