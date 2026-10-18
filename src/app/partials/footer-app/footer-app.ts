import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-footer-app',
  styleUrl: './footer-app.scss',
  templateUrl: './footer-app.html',
})
export class FooterApp implements OnInit{
  constructor(
    private router: Router
  ){
  }

  ngOnInit(): void {

  }

  public terminosCondiciones(){

  }

  public avisoPrivacidad(){

  }
}