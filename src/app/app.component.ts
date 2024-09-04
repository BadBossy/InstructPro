import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from './core/sidenav/sidenav.component';
import { Guide } from './features/manual/manual-renderer/manual-renderer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidenavComponent, MatSidenavModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'InstructPro';
  sideNav = false;
  guides: Array<Guide> = [
    {
      _id: 'guide1',
      description: 'text',
      steps: [],
      tags: [],
      topic: 'Guide 1',
      author: {
        authorId: 'author789',
        name: 'John Smith',
      },
      createdAt: new Date('2024-08-30T12:00:00Z'),
      updatedAt: new Date('2024-08-30T12:00:00Z'),
    },
  ];
}

//#4A4F55
//#5E50A8
//#009F5C
//#ECA94E
//#F7F7F7
