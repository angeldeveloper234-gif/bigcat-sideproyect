import { LucideIcon } from 'lucide-react';
import React from 'react';

// Allows both Lucide icons and custom SVG icon components
export type AnyIcon = LucideIcon | React.FC<{ size?: number; className?: string; strokeWidth?: number }>;

export interface ServiceItem {
  id: string;
  slug: string;
  name: string;
  description: string;
  fullDescription: string;
  risks: string;
  process: string;
  prevention: string;
  icon: AnyIcon;
  image: string;
  features: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
  image?: string;
  subtitle?: string;
}

export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
  children?: { label: string; href: string }[];
}

export interface MethodItem {
  title: string;
  description: string;
  icon: AnyIcon;
  isEco?: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  /** <title> de 60 caracteres o menos. Si falta, se usa `title`. */
  seoTitle?: string;
  excerpt: string;
  content: string;
  featured_image: string;
  published_at: string;
  author: string;
  category: string;
  meta_description: string;
  keywords: string[];
  /** Slug de /servicios/{slug}/ que se enlaza al final del artículo. */
  servicioRelacionado?: string;
}

