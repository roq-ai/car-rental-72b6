import { VehicleInterface } from 'interfaces/vehicle';
import { GetQueryInterface } from 'interfaces';

export interface VehicleUsageInterface {
  id?: string;
  date: any;
  distance_travelled: number;
  fuel_consumed: number;
  vehicle_id: string;
  created_at?: any;
  updated_at?: any;

  vehicle?: VehicleInterface;
  _count?: {};
}

export interface VehicleUsageGetQueryInterface extends GetQueryInterface {
  id?: string;
  vehicle_id?: string;
}
