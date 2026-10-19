import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FooterApp } from '../../partials/footer-app/footer-app';
import { HeaderApp } from '../../partials/header-app/header-app';
import { LeftSidebar } from '../../partials/left-sidebar/left-sidebar';

@Component({
  imports: [
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    LeftSidebar,
    HeaderApp,
    FooterApp
  ],
  selector: 'app-about-screen',
  styleUrl: './about-screen.scss',
  templateUrl: './about-screen.html',
})
export class AboutScreen { }
