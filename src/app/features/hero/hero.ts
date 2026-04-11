import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule,TranslateModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  name = signal('Patrice TALOM KAPTUE');
}
