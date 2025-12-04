import { LucideIcon } from 'lucide-react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface Persona {
  role: string;
  description: string;
  icon: LucideIcon;
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}
