const mapping: Record<string, string> = {
  administrations: 'administration',
  reservations: 'reservation',
  users: 'user',
  vehicles: 'vehicle',
  'vehicle-owners': 'vehicle_owner',
  'vehicle-usages': 'vehicle_usage',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
