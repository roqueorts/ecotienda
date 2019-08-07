"use strict";
exports.__esModule = true;
var Emitter = /** @class */ (function () {
    // Se ejecuta antes de renderizar
    function Emitter() {
        this.arrayDeEventos = [];
    }
    Emitter.prototype.subscribe = function (_myevent, funcionCallBack) {
        // this.arrayDeFunciones.push(funcionCallBack);
        if (this.arrayDeEventos.find(function (a) { return a.nombre === _myevent; })) {
            this.arrayDeEventos.find(function (a) { return a.nombre === _myevent; }).arrayDeCallBacks.push(funcionCallBack);
        }
        else {
            this.evento = { nombre: _myevent, arrayDeCallBacks: [] };
            this.evento.arrayDeCallBacks.push(funcionCallBack);
            this.arrayDeEventos.push(this.evento);
        }
    };
    Emitter.prototype.emit = function (_myevent) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        // return this.obs;
        var index = this.arrayDeEventos.findIndex(function (a) { return a.nombre === _myevent; });
        if (index >= 0) {
            this.arrayDeEventos[index].arrayDeCallBacks.forEach(function (fn) { return fn.apply(void 0, args); });
        }
        // this.obs(args);
    };
    return Emitter;
}());
exports["default"] = Emitter;
