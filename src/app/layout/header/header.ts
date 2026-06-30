import {
  Component, ChangeDetectionStrategy, signal, HostListener, inject, OnDestroy
} from '@angular/core';
import { MenuService } from '../../core/services/menu.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnDestroy {
  readonly menu = inject(MenuService);
  scrolled = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 20);
  }

  @HostListener('window:keydown.escape')
  onEscape(): void {
    if (this.menu.isOpen()) this.menu.close();
  }

  ngOnDestroy(): void {
    this.menu.close();
  }
}
