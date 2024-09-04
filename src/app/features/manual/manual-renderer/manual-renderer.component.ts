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
        content: `
        <p>Before you start building your computer, ensure you have all the necessary components:</p>
        <ul>
          <li><strong>CPU (Processor)</strong></li>
          <li><strong>Motherboard</strong></li>
          <li><strong>RAM (Memory)</strong></li>
          <li><strong>Storage (SSD/HDD)</strong></li>
          <li><strong>Power Supply Unit (PSU)</strong></li>
          <li><strong>Graphics Card (GPU)</strong></li>
          <li><strong>Case</strong></li>
          <li><strong>Cooling System (Air/Water)</strong></li>
          <li><strong>Monitor, Keyboard, and Mouse</strong></li>
        </ul>
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
        content: `
        <p>Set up a clean, well-lit workspace with plenty of room to spread out your components.</p>
        <ul>
          <li>Use an anti-static mat or wrist strap to prevent static damage to your components.</li>
          <li>Have your tools ready, including a screwdriver and thermal paste (if needed).</li>
        </ul>
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
        content: `
        <p>Carefully install the CPU into the motherboard:</p>
        <ul>
          <li>Open the CPU socket on the motherboard.</li>
          <li>Align the CPU with the socket (check the notches and arrow indicators).</li>
          <li>Gently place the CPU into the socket and secure it with the retention arm.</li>
        </ul>
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
        content: `
        <p>Apply a small amount of thermal paste to the top of the CPU if the cooler does not come with pre-applied paste.</p>
        <ul>
          <li>Attach the CPU cooler to the motherboard according to the manufacturer's instructions.</li>
          <li>Connect the cooler's fan to the appropriate header on the motherboard.</li>
        </ul>
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
        content: `
        <p>Insert the RAM sticks into the motherboard slots:</p>
        <ul>
          <li>Open the RAM slot clips on the motherboard.</li>
          <li>Align the notch on the RAM stick with the slot.</li>
          <li>Press the RAM stick down firmly until the clips snap into place.</li>
        </ul>
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
        content: `
        <p>Secure the motherboard inside the case:</p>
        <ul>
          <li>Place the motherboard standoffs in the case.</li>
          <li>Align the motherboard with the standoffs and I/O shield.</li>
          <li>Screw the motherboard into place using the provided screws.</li>
        </ul>
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
        content: `
        <p>Mount the power supply unit (PSU) into the case:</p>
        <ul>
          <li>Position the PSU in the designated area of the case (usually at the bottom).</li>
          <li>Secure the PSU with screws provided by the case.</li>
          <li>Connect the PSU cables to the motherboard, CPU, and other components.</li>
        </ul>
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
        content: `
        <p>Mount the SSD or HDD into the case:</p>
        <ul>
          <li>Use the provided brackets or trays to secure the drive.</li>
          <li>Connect the data cable (SATA) to the motherboard.</li>
          <li>Connect the power cable to the drive from the PSU.</li>
        </ul>
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
        content: `
        <p>Insert the graphics card into the appropriate PCIe slot:</p>
        <ul>
          <li>Remove the expansion slot covers at the back of the case.</li>
          <li>Align the GPU with the PCIe slot and press down firmly until it clicks into place.</li>
          <li>Secure the GPU with screws and connect the power cables from the PSU.</li>
        </ul>
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
        content: `
        <p>Connect all necessary cables from the PSU, case, and components:</p>
        <ul>
          <li>Connect front panel connectors (power button, USB ports, etc.) to the motherboard.</li>
          <li>Connect fans to the appropriate headers on the motherboard.</li>
          <li>Ensure all power and data cables are securely connected.</li>
        </ul>
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
        content: `
        <p>Power on your computer to test the build:</p>
        <ul>
          <li>Connect the power cable to the PSU and the wall outlet.</li>
          <li>Turn on the power supply and press the power button on the case.</li>
          <li>Verify that all fans are spinning, and check for any POST (Power-On Self-Test) errors on the monitor.</li>
        </ul>
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
        content: `
        <p>Once the hardware is functioning properly, install an operating system:</p>
        <ul>
          <li>Insert a bootable USB drive or CD/DVD with the operating system of your choice.</li>
          <li>Follow the on-screen instructions to install the OS onto your primary storage drive.</li>
        </ul>
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
