export interface NavItem {
  label: string;
  path: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
}

export interface Metric {
  label: string;
  value: string;
  unit: string;
  description: string;
}

export interface ImpactStat {
  year: string;
  value: number;
}
