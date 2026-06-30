import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  trigger, style, animate, transition, stagger, query
} from '@angular/animations';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('heroEnter', [
      transition(':enter', [
        query('.hero-animate', [
          style({ opacity: 0, transform: 'translateY(28px)' }),
          stagger(120, [
            animate('700ms cubic-bezier(0.16, 1, 0.3, 1)',
              style({ opacity: 1, transform: 'translateY(0)' })
            ),
          ]),
        ], { optional: true }),
      ]),
    ]),
    trigger('photoEnter', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(1.05)' }),
        animate('900ms 400ms cubic-bezier(0.16, 1, 0.3, 1)',
          style({ opacity: 1, transform: 'scale(1)' })
        ),
      ]),
    ]),
  ],
})
export class HeroComponent {
  scrollToProjects(): void {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }
}
