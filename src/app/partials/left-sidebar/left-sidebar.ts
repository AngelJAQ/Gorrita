import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-left-sidebar',
  styleUrl: './left-sidebar.scss',
  templateUrl: './left-sidebar.html',
})
export class LeftSidebar implements OnInit {
  @Output() cerrar = new EventEmitter<void>();

  constructor(private router: Router) {}

  ngOnInit(): void {

  }

  public cerrar_drawer(): void {
    this.cerrar.emit();
  }
}

