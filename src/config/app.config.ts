interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Administrator', 'Vehicle Owner'],
  tenantName: 'Administration',
  applicationName: 'Car Rental',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage user',
    'Manage administration',
    'Manage vehicle_owner',
    'Manage vehicle',
    'Manage reservation',
    'Manage vehicle_usage',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/2dbac9db-6949-48a6-a092-e45ff31a5154',
};
