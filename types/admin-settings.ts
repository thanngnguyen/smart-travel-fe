export interface BusinessInfo {
  organizationName: string;
  contactEmail: string;
  headquartersAddress: string;
}

export interface ApiCredentialItem {
  id: string;
  label: string;
  value: string;
  actionLabel: string;
  isMasked?: boolean;
}

export interface RbacRoleRow {
  id: string;
  roleName: string;
  scope: string;
  userCount: string;
}

export interface SettingsActivityItem {
  id: string;
  actor: string;
  description: string;
  timestamp: string;
  dotClassName: string;
}
