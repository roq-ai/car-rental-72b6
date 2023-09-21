import { VehicleInterface } from 'interfaces/vehicle';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface VehicleOwnerInterface {
  id?: string;
  name: string;
  contact_number: string;
  address: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  vehicle?: VehicleInterface[];
  user?: UserInterface;
  _count?: {
    vehicle?: number;
  };
}

export interface VehicleOwnerGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  contact_number?: string;
  address?: string;
  user_id?: string;
}
