import { ReactNode } from 'react';

export interface QuickLink {
  title: string;
  description: string;
  url: string;
  icon: ReactNode;
  category: string;
  color: string;
}

export type Category = {
  name: string;
  icon: ReactNode;
};