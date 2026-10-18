import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header-app',
  styleUrl: './header-app.scss',
  templateUrl: './header-app.html',
})
export class HeaderApp {
  @Output() drawer = new EventEmitter();

  constructor(){

  }

  ngOnInit(): void {

  }

  drawerOpen(){
    this.drawer.emit();
  }
}
