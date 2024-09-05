import { Component, Input } from '@angular/core';
import { Guide } from '../../models/guide.model';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  standalone: true,
  imports: [MatButtonModule],
})
export class SidenavComponent {
  @Input() data: Guide[] = [];

  constructor(private readonly router: Router) {}

  openGuide(id: string | undefined) {
    if (id) {
      this.router.navigate(['manual', id]);
    }
  }
}
