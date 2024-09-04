export interface Media {
  fileId: string;
  filename: string;
  fileUrl: string;
}

export interface Step {
  stepNumber: number;
  title: string;
  content: string; // Assuming content is in HTML
  media: Media[];
  notes: string;
}

export interface Author {
  authorId: string;
  name: string;
}

export interface Guide {
  _id?: string; // Optional for new guides
  topic: string;
  description: string;
  createdAt?: Date; // Optional for new guides
  updatedAt?: Date; // Optional for new guides
  author: Author;
  steps: Step[];
  tags: string[];
}
