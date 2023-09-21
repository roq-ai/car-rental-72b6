import { ReservationInterface } from 'interfaces/reservation';
import { VehicleUsageInterface } from 'interfaces/vehicle-usage';
import { VehicleOwnerInterface } from 'interfaces/vehicle-owner';
import { GetQueryInterface } from 'interfaces';

export interface VehicleInterface {
  id?: string;
  make: string;
  model: string;
  year: number;
  color: string;
  registration_number: string;
  owner_id: string;
  created_at?: any;
  updated_at?: any;
  reservation?: ReservationInterface[];
  vehicle_usage?: VehicleUsageInterface[];
  vehicle_owner?: VehicleOwnerInterface;
  _count?: {
    reservation?: number;
    vehicle_usage?: number;
  };
}

export interface VehicleGetQueryInterface extends GetQueryInterface {
  id?: string;
  make?: string;
  model?: string;
  color?: string;
  registration_number?: string;
  owner_id?: string;
}
