export interface CustomerDealCategoryOption {
  id: string;
  label: string;
  icon?: string;
}

export interface CustomerDealsHeroContent {
  badgeLabel: string;
  title: string;
  description: string;
  primaryActionLabel: string;
  secondaryActionLabel: string;
  backgroundImageUrl: string;
}

export interface CustomerDealsNewsletterContent {
  title: string;
  description: string;
  emailPlaceholder: string;
  submitLabel: string;
  backgroundImageUrl: string;
}

export interface CustomerDeal {
  id: string;
  title: string;
  categoryId: string;
  categoryLabel: string;
  location: string;
  imageUrl: string;
  shortDescription: string;
  validUntil: string;
  promoCode: string;
  discountLabel: string;
  originalPrice: string;
  discountedPrice: string;
}

export interface CustomerDealHero {
  campaignLabel: string;
  title: string;
  description: string;
  countdownLabel: string;
  discountValue: string;
  promoCode: string;
  primaryActionLabel: string;
  backgroundImageUrl: string;
}

export interface CustomerDealSupportCard {
  icon: string;
  title: string;
  description: string;
  actionLabel: string;
  actionHref: string;
}

export interface CustomerDealApplicableTour {
  id: string;
  title: string;
  imageUrl: string;
  rating: number;
  duration: string;
  seatsLeft: number;
  originalPrice: string;
  discountedPrice: string;
  discountLabel: string;
}

export interface CustomerDealFinalCta {
  title: string;
  description: string;
  primaryActionLabel: string;
  primaryActionHref: string;
  secondaryActionLabel: string;
  secondaryActionHref: string;
  backgroundImageUrl: string;
}

export interface CustomerDealDetails {
  hero: CustomerDealHero;
  conditionTitle: string;
  conditionColumns: string[][];
  supportCard: CustomerDealSupportCard;
  applicableToursTitle: string;
  applicableToursDescription: string;
  applicableTours: CustomerDealApplicableTour[];
  finalCta: CustomerDealFinalCta;
}

export interface CustomerDealDetailsPayload extends CustomerDealDetails {
  deal: CustomerDeal;
}
