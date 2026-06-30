import { Injectable, signal } from '@angular/core';
import { Project, Experience, StackGroup } from '../models/portfolio.models';

@Injectable({ providedIn: 'root' })
export class PortfolioService {

  readonly projects = signal<Project[]>([
    {
      id: 'the-line',
      category: 'Enterprise System',
      name: 'The Line',
      description: 'Large-scale government enterprise system built for a client in Saudi Arabia. Contributed across multiple modules with a focus on architecture quality and sustainable delivery.',
      stack: ['Angular', 'TypeScript', 'RxJS', 'SCSS', 'Angular Material'],
      contribution: 'Feature development · REST API integration · Legacy refactoring · Production bug fixes',
      challenge: 'Refactoring large, tightly-coupled components into lean, reusable pieces inside a high-stakes live government system — without breaking anything.',
      nda: true,
    },
    {
      id: 'beta',
      category: 'Enterprise Internal System',
      name: 'BETA Internal System',
      description: 'Full-featured enterprise application for managing electrical and mechanical field inspections across multiple client sites and regions. Covers the complete inspection lifecycle — device assignment, engineer scheduling, a 4-step on-site workflow with digital signatures, and automated PDF report generation.',
      stack: ['Angular 18', 'Signals', 'RxJS', 'SCSS', 'Reactive Forms', 'jsPDF', 'JWT'],
      contribution: 'Architecture design · Role-based routing · Inspection workflow engine · Bilingual RTL system · Interceptor chain',
      challenge: 'Engineering a stateful 4-step inspection workflow with dual draft persistence (localStorage + API sync) for unstable field connections — while supporting full Arabic/English RTL layout switching across 15+ feature modules, all without an external state library.',
      nda: true,
    },
    {
      id: 'hotels',
      category: 'Management System',
      name: 'Hotels Management System',
      description: 'Full front-end for a hotel management platform serving three distinct user roles: Admins, Employees, and Customers — each with their own dashboards, permissions, and workflows.',
      stack: ['Angular', 'SCSS', 'Reactive Forms', 'REST APIs'],
      contribution: 'End-to-end front-end · Role-based routing · Booking flows · Auth',
      challenge: 'Designing a consistent, intuitive UX across three completely different user roles while maintaining a single coherent design system.',
      github: 'https://github.com/yousefshatnawi',
      demo: 'https://casaserene-89779.web.app/home',
    },
    {
      id: 'guzlan',
      category: 'Delivery Platform',
      name: 'Guzlan Delivery',
      description: 'Delivery management system serving four user types — Admins, Clients, Drivers, and Customers — each with role-specific dashboards, request flows, and interactive forms.',
      stack: ['Angular', 'Angular Material', 'SCSS', 'Reactive Forms', 'REST APIs'],
      contribution: 'Full front-end across all four roles · Responsive dashboards · Form architecture',
      challenge: 'Building responsive, role-aware interfaces for four distinct user types with fundamentally different workflows on a single codebase.',
      github: 'https://github.com/yousefshatnawi',
    },
  ]);

  readonly experiences = signal<Experience[]>([
    {
      company: 'Unlimited Innovation',
      role: 'Angular Front-End Developer',
      period: 'Oct 2025 — Present',
      current: true,
      bullets: [
        'Delivering enterprise Angular applications for clients in Jordan and Saudi Arabia',
        'Building reusable components and shared modules across multiple projects',
        'Refactoring legacy codebases to improve readability, performance, and maintainability',
        'Working in an Agile team alongside backend engineers, QA, and UI/UX designers',
        'Using Git and Azure DevOps for daily version control and CI/CD workflows',
      ],
    },
    {
      company: 'Ideal Innovation House',
      role: 'Angular Front-End Developer',
      period: 'Dec 2024 — May 2025',
      current: false,
      bullets: [
        'Built the Hotels Management System front-end from the ground up',
        'Implemented role-based access and routing for three distinct user types',
        'Worked on authentication, room booking, and request management modules',
      ],
    },
    {
      company: 'Freelance',
      role: 'Angular Front-End Developer',
      period: 'Aug 2023 — Nov 2024',
      current: false,
      bullets: [
        'Delivered Angular web applications for multiple clients while working full-time',
        'Built responsive UIs, reusable component libraries, and REST API integrations',
        'Managed full project lifecycle: architecture, development, and client handover',
      ],
    },
    {
      company: 'Shahwan Furniture',
      role: 'Help Desk Technician',
      period: 'Jul 2022 — Jun 2024',
      current: false,
      bullets: [
        'Built technical troubleshooting and systematic problem-solving skills that directly inform how I build software for real users today',
      ],
    },
  ]);

  readonly stackGroups = signal<StackGroup[]>([
    {
      category: 'Frontend',
      items: ['Angular', 'TypeScript', 'JavaScript ES6+', 'SCSS', 'HTML5', 'RxJS', 'Angular Material'],
    },
    {
      category: 'Architecture',
      items: ['Standalone Components', 'Reactive Forms', 'Route Guards', 'Lazy Loading', 'Dependency Injection', 'Component-Based Architecture'],
    },
    {
      category: 'Tooling',
      items: ['Git', 'Azure DevOps', 'Postman', 'VS Code', 'Angular CLI', 'npm'],
    },
    {
      category: 'Concepts',
      items: ['REST APIs', 'HTTP Client', 'Performance Optimization', 'Responsive Design', 'Debugging', 'Agile / Scrum'],
    },
  ]);
}
