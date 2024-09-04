import { Component, Input } from '@angular/core';
import { Guide } from '../../models/guide.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  standalone: true,
})
export class SidenavComponent {
  @Input() data: Guide[] = [];
}
