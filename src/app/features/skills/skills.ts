import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SKILLS_DATA } from '../../core/models/data/skills.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  categories = signal(SKILLS_DATA);
}
