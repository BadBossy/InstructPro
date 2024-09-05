import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { QuillEditorComponent } from 'ngx-quill';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { Step } from '../../../models/guide.model';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.scss'],
  standalone: true,
  imports: [
    QuillEditorComponent,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    ScrollingModule,
  ],
})
export class ManualCreatorComponent implements OnInit {
  data: string = '';
  steps: Array<Step> = [];
  constructor() {}

  ngOnInit() {}
}
