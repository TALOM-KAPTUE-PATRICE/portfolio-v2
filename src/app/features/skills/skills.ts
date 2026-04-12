import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SKILLS_DATA } from '../../core/models/data/skills.data';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  // On utilise directement les données sources contenant les clés de traduction
  categories = signal(SKILLS_DATA);
}
