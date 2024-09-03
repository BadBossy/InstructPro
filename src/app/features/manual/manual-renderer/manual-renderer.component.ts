import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatProgressBarModule } from '@angular/material/progress-bar'

export interface Guide {
  _id: string
  topic: string
  description: string
  createdAt: Date
  updatedAt: Date
  author: Author
  steps: Step[]
  tags: string[]
}

export interface Author {
  authorId: string
  name: string
}

export interface Step {
  stepNumber: number
  title: string
  content: string // Markdown or HTML
  media: Media[]
  notes?: string // Optional
}

export interface Media {
  fileId: string
  filename: string
  fileUrl: string
}

@Component({
  selector: 'app-manual-renderer',
  templateUrl: './manual-renderer.component.html',
  styleUrls: ['./manual-renderer.component.scss'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatProgressBarModule],
})
export class ManualRendererComponent implements OnInit {
  data: Guide = {
    _id: 'guide123',
    topic: 'How to Bake a Cake',
    description: 'A step-by-step guide on baking a delicious cake.',
    createdAt: new Date('2024-08-30T12:00:00Z'),
    updatedAt: new Date('2024-08-30T12:00:00Z'),
    author: {
      authorId: 'author456',
      name: 'Jane Doe',
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Gather Ingredients',
        content: 'First, gather all the necessary ingredients...',
        media: [
          {
            fileId: 'media789',
            filename: 'ingredients.png',
            fileUrl: 'https://example.com/ingredients.png',
          },
        ],
        notes: 'Make sure everything is fresh.',
      },
      {
        stepNumber: 2,
        title: 'Preheat the Oven',
        content: 'Preheat your oven to 350°F (180°C)...',
        media: [],
      },
    ],
    tags: ['baking', 'cake', 'dessert'],
  }
  currentStep: Step | null = null
  progress = 0

  constructor() {}

  ngOnInit() {}

  onClick(step: Step) {
    this.currentStep = step
    this.progress = (this.currentStep.stepNumber / this.data.steps.length) * 100
  }
}
