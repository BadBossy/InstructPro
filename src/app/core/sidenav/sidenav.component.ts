import { Component, Input } from '@angular/core';
import { Guide } from '../../features/manual/manual-renderer/manual-renderer.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  standalone: true,
})
export class SidenavComponent {
  @Input() data: Array<Guide> = [];
}
