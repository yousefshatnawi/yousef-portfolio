import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MenuService {
  readonly isOpen = signal(false);

  readonly links = [
    { label: 'About',      fragment: 'about' },
    { label: 'Projects',   fragment: 'projects' },
    { label: 'Experience', fragment: 'experience' },
    { label: 'Stack',      fragment: 'stack' },
  ];

  toggle(): void {
    const next = !this.isOpen();
    this.isOpen.set(next);
    document.body.style.overflow = next ? 'hidden' : '';
  }

  close(): void {
    this.isOpen.set(false);
    document.body.style.overflow = '';
  }

  navigateTo(fragment: string): void {
    this.close();
    setTimeout(() => {
      document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
    }, 10);
  }
}
