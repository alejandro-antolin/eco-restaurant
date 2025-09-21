import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface NavigationItem {
  readonly path: string;
  readonly label: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.html'
})
export class HeaderComponent {
  readonly restaurantName = 'La Moderna';
  
  readonly navigationItems: readonly NavigationItem[] = [
    { path: '/home', label: 'Inicio' },
    { path: '/menu', label: 'Carta' },
    { path: '/about', label: 'Nosotros' },
    { path: '/contact', label: 'Contacto' }
  ] as const;

  private readonly _isMobileMenuOpen = signal<boolean>(false);
  readonly isMobileMenuOpen = this._isMobileMenuOpen.asReadonly();

  toggleMobileMenu(): void {
    this._isMobileMenuOpen.update(current => !current);
  }

  closeMobileMenu(): void {
    this._isMobileMenuOpen.set(false);
  }
}