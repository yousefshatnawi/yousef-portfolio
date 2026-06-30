export interface Project {
  id: string;
  category: string;
  name: string;
  description: string;
  stack: string[];
  contribution: string;
  challenge: string;
  github?: string;
  demo?: string;
  nda?: boolean;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  current: boolean;
  bullets: string[];
}

export interface StackGroup {
  category: string;
  items: string[];
}
