import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})


export class Footer {
  currentYear: number = new Date().getFullYear();
}
