import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ActivatedRoute } from '@angular/router';
import { GuideService } from '../../../services/guides.service';
import { Guide, Step } from '../../../models/guide.model';

@Component({
  selector: 'app-manual-renderer',
  templateUrl: './manual-renderer.component.html',
  styleUrls: ['./manual-renderer.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    ScrollingModule,
  ],
})
export class ManualRendererComponent {
  data: Guide | null = null;

  currentStep: Step | null = null;
  progress = 0;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly guideService: GuideService
  ) {
    this.guideService
      .getGuideById(this.route.snapshot.params['id'])
      .subscribe((response) => (this.data = response));
  }

  onClick(step: Step) {
    if (this.data) {
      this.currentStep = step;
      this.progress = Math.floor(
        (this.currentStep.stepNumber / this.data.steps.length) * 100
      );
    }
  }
}
