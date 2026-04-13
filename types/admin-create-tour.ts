export interface TourDraftDay {
  id: string;
  title: string;
  descriptionPlaceholder: string;
  tags: string[];
}

export interface MediaThumbnail {
  id: string;
  src: string;
  altText: string;
}

export interface FrequencyOption {
  value: string;
  label: string;
}

export interface FooterLink {
  id: string;
  label: string;
  href: string;
}
