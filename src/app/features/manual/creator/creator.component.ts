import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillEditorComponent } from 'ngx-quill';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.scss'],
  standalone: true,
  imports: [QuillEditorComponent, FormsModule, ReactiveFormsModule],
})
export class ManualCreatorComponent implements OnInit {
  data: string = '';
  constructor() {}

  ngOnInit() {}
}
