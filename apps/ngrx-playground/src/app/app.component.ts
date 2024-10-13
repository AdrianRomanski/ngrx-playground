import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

import {
  BookContainerComponent
} from '@documentation/state';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, BookContainerComponent, BookContainerComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
