import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {
  MyCounterComponent
} from '../../../../libs/documentation/state/src/lib/getting-started/my-counter/my-counter.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MyCounterComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ngrx-playground';
}
