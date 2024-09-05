import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from './core/sidenav/sidenav.component';
import { GuideService } from './services/guides.service';
import { Guide } from './models/guide.model';

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
  guides: Guide[] = [];

  constructor(private readonly guideService: GuideService) {
    this.guideService.getGuides().subscribe((s) => (this.guides = s));
  }

  addGuide() {
    //   this.guideService.createGuide().subscribe((s) => console.log(s));
  }
}

//#4A4F55
//#5E50A8
//#009F5C
//#ECA94E
//#F7F7F7
