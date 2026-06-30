import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './stack.html',
  styleUrl: './stack.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StackComponent {
  private portfolioService = inject(PortfolioService);
  readonly stackGroups = this.portfolioService.stackGroups;
}
