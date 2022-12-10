import { Component } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public readonly themeService: ThemeService) {

  }

  public toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
