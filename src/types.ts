/**
 * Type definitions for RON Humanitarian Foundation
 */

export interface CommunityLocation {
  id: string;
  name: string;
  state: 'Plateau' | 'Abuja' | 'Imo';
  reached: number;
  highlight?: string;
}

export interface FocusArea {
  id: string;
  slug?: string;
  title: string;
  description: string;
  subtext: string;
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryPhoto {
  id: string;
  url: string;
  title: string;
  location: string;
  category: string;
}
