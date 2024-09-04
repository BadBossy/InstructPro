import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ScrollingModule } from '@angular/cdk/scrolling';

export interface Guide {
  _id: string;
  topic: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  author: Author;
  steps: Step[];
  tags: string[];
}

export interface Author {
  authorId: string;
  name: string;
}

export interface Step {
  stepNumber: number;
  title: string;
  content: string; // Markdown or HTML
  media: Media[];
  notes?: string; // Optional
}

export interface Media {
  fileId: string;
  filename: string;
  fileUrl: string;
}

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
export class ManualRendererComponent implements OnInit {
  data: Guide = {
    _id: 'guide001',
    topic: 'How to Build a Computer',
    description:
      'A comprehensive step-by-step guide on building your own computer from scratch.',
    createdAt: new Date('2024-08-30T12:00:00Z'),
    updatedAt: new Date('2024-08-30T12:00:00Z'),
    author: {
      authorId: 'author789',
      name: 'John Smith',
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Gather All Necessary Components',
        content: `Before you start building your computer, ensure you have all the necessary components:
- **CPU (Processor)**
- **Motherboard**
- **RAM (Memory)**
- **Storage (SSD/HDD)**
- **Power Supply Unit (PSU)**
- **Graphics Card (GPU)**
- **Case**
- **Cooling System (Air/Water)**
- **Monitor, Keyboard, and Mouse**
      `,
        media: [
          {
            fileId: 'media001',
            filename: 'components.jpg',
            fileUrl: 'https://example.com/components.jpg',
          },
        ],
        notes:
          'Double-check compatibility between the motherboard, CPU, and RAM.',
      },
      {
        stepNumber: 2,
        title: 'Prepare Your Workspace',
        content: `Set up a clean, well-lit workspace with plenty of room to spread out your components. 
- Use an anti-static mat or wrist strap to prevent static damage to your components.
- Have your tools ready, including a screwdriver and thermal paste (if needed).
      `,
        media: [
          {
            fileId: 'media002',
            filename: 'workspace.jpg',
            fileUrl: 'https://example.com/workspace.jpg',
          },
        ],
        notes:
          'Ensure you are grounded to prevent static electricity from damaging components.',
      },
      {
        stepNumber: 3,
        title: 'Install the CPU',
        content: `Carefully install the CPU into the motherboard:
- Open the CPU socket on the motherboard.
- Align the CPU with the socket (check the notches and arrow indicators).
- Gently place the CPU into the socket and secure it with the retention arm.
      `,
        media: [
          {
            fileId: 'media003',
            filename: 'cpu_install.jpg',
            fileUrl: 'https://example.com/cpu_install.jpg',
          },
        ],
        notes: 'Be careful not to touch the CPU pins or apply too much force.',
      },
      {
        stepNumber: 4,
        title: 'Install the CPU Cooler',
        content: `Apply a small amount of thermal paste to the top of the CPU if the cooler does not come with pre-applied paste.
- Attach the CPU cooler to the motherboard according to the manufacturer's instructions.
- Connect the cooler's fan to the appropriate header on the motherboard.
      `,
        media: [
          {
            fileId: 'media004',
            filename: 'cpu_cooler_install.jpg',
            fileUrl: 'https://example.com/cpu_cooler_install.jpg',
          },
        ],
        notes:
          'Ensure the cooler is firmly attached to ensure proper heat dissipation.',
      },
      {
        stepNumber: 5,
        title: 'Install the RAM',
        content: `Insert the RAM sticks into the motherboard slots:
- Open the RAM slot clips on the motherboard.
- Align the notch on the RAM stick with the slot.
- Press the RAM stick down firmly until the clips snap into place.
      `,
        media: [
          {
            fileId: 'media005',
            filename: 'ram_install.jpg',
            fileUrl: 'https://example.com/ram_install.jpg',
          },
        ],
        notes:
          'Install RAM in the recommended slots for optimal performance (check your motherboard manual).',
      },
      {
        stepNumber: 6,
        title: 'Install the Motherboard in the Case',
        content: `Secure the motherboard inside the case:
- Place the motherboard standoffs in the case.
- Align the motherboard with the standoffs and I/O shield.
- Screw the motherboard into place using the provided screws.
      `,
        media: [
          {
            fileId: 'media006',
            filename: 'motherboard_install.jpg',
            fileUrl: 'https://example.com/motherboard_install.jpg',
          },
        ],
        notes: 'Ensure no cables are trapped under the motherboard.',
      },
      {
        stepNumber: 7,
        title: 'Install the Power Supply',
        content: `Mount the power supply unit (PSU) into the case:
- Position the PSU in the designated area of the case (usually at the bottom).
- Secure the PSU with screws provided by the case.
- Connect the PSU cables to the motherboard, CPU, and other components.
      `,
        media: [
          {
            fileId: 'media007',
            filename: 'psu_install.jpg',
            fileUrl: 'https://example.com/psu_install.jpg',
          },
        ],
        notes: 'Make sure all cables are connected firmly and routed cleanly.',
      },
      {
        stepNumber: 8,
        title: 'Install Storage (SSD/HDD)',
        content: `Mount the SSD or HDD into the case:
- Use the provided brackets or trays to secure the drive.
- Connect the data cable (SATA) to the motherboard.
- Connect the power cable to the drive from the PSU.
      `,
        media: [
          {
            fileId: 'media008',
            filename: 'storage_install.jpg',
            fileUrl: 'https://example.com/storage_install.jpg',
          },
        ],
        notes:
          'Consider using an M.2 SSD for faster performance if your motherboard supports it.',
      },
      {
        stepNumber: 9,
        title: 'Install the Graphics Card (GPU)',
        content: `Insert the graphics card into the appropriate PCIe slot:
- Remove the expansion slot covers at the back of the case.
- Align the GPU with the PCIe slot and press down firmly until it clicks into place.
- Secure the GPU with screws and connect the power cables from the PSU.
      `,
        media: [
          {
            fileId: 'media009',
            filename: 'gpu_install.jpg',
            fileUrl: 'https://example.com/gpu_install.jpg',
          },
        ],
        notes: 'Ensure the GPU is seated properly to avoid connection issues.',
      },
      {
        stepNumber: 10,
        title: 'Connect All Cables',
        content: `Connect all necessary cables from the PSU, case, and components:
- Connect front panel connectors (power button, USB ports, etc.) to the motherboard.
- Connect fans to the appropriate headers on the motherboard.
- Ensure all power and data cables are securely connected.
      `,
        media: [
          {
            fileId: 'media010',
            filename: 'cable_management.jpg',
            fileUrl: 'https://example.com/cable_management.jpg',
          },
        ],
        notes:
          'Good cable management is key to maintaining airflow and a clean build.',
      },
      {
        stepNumber: 11,
        title: 'Power On and Test the System',
        content: `Power on your computer to test the build:
- Connect the power cable to the PSU and the wall outlet.
- Turn on the power supply and press the power button on the case.
- Verify that all fans are spinning, and check for any POST (Power-On Self-Test) errors on the monitor.
      `,
        media: [
          {
            fileId: 'media011',
            filename: 'system_power_on.jpg',
            fileUrl: 'https://example.com/system_power_on.jpg',
          },
        ],
        notes:
          "If the system doesn't power on, double-check all connections and ensure the components are seated properly.",
      },
      {
        stepNumber: 12,
        title: 'Install an Operating System',
        content: `Once the hardware is functioning properly, install an operating system:
- Insert a bootable USB drive or CD/DVD with the operating system of your choice.
- Follow the on-screen instructions to install the OS onto your primary storage drive.
      `,
        media: [
          {
            fileId: 'media012',
            filename: 'os_install.jpg',
            fileUrl: 'https://example.com/os_install.jpg',
          },
        ],
        notes:
          'Ensure you have the necessary drivers and software available after OS installation.',
      },
    ],
    tags: ['computers', 'hardware', 'build', 'PC'],
  };

  currentStep: Step | null = null;
  progress = 0;

  constructor() {}

  ngOnInit() {}

  onClick(step: Step) {
    this.currentStep = step;
    this.progress = Math.floor(
      (this.currentStep.stepNumber / this.data.steps.length) * 100
    );
  }
}
