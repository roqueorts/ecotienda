import { Directive, Output, EventEmitter, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {
  @Input() archivos;
  @Output() mouseSobre: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  @HostListener('dragover', ['event'])
  public onDragEnter(event: any) {
    this.mouseSobre.emit(true);
  }

  @HostListener('dragleave', ['event'])
  public onDragLeave(event: any) {
    this.mouseSobre.emit(false);
  }

  @HostListener('drop', ['event'])
  public onDrop(event: any) {
    this.mouseSobre.emit(false);
    const transferencia = this.getTransferencia(event);
  }

  private getTransferencia(event: any) {
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
  }
}
