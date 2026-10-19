import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
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
