import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EXPERIENCES_DATA } from '../../core/models/data/experiences.data';


@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  experiences = signal(EXPERIENCES_DATA);
}
