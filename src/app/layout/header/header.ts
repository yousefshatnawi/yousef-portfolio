import {
  Component, ChangeDetectionStrategy, signal, HostListener, inject
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface NavLink { label: string; fragment: string; }

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  scrolled = signal(false);
  menuOpen = signal(false);

  readonly links: NavLink[] = [
    { label: 'About',      fragment: 'about' },
    { label: 'Projects',   fragment: 'projects' },
    { label: 'Experience', fragment: 'experience' },
    { label: 'Stack',      fragment: 'stack' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 20);
  }

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  scrollTo(fragment: string): void {
    this.closeMenu();
    document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
  }
}
