import axios from 'axios';
import queryString from 'query-string';
import { VehicleOwnerInterface, VehicleOwnerGetQueryInterface } from 'interfaces/vehicle-owner';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getVehicleOwners = async (
  query?: VehicleOwnerGetQueryInterface,
): Promise<PaginatedInterface<VehicleOwnerInterface>> => {
  const response = await axios.get('/api/vehicle-owners', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createVehicleOwner = async (vehicleOwner: VehicleOwnerInterface) => {
  const response = await axios.post('/api/vehicle-owners', vehicleOwner);
  return response.data;
};

export const updateVehicleOwnerById = async (id: string, vehicleOwner: VehicleOwnerInterface) => {
  const response = await axios.put(`/api/vehicle-owners/${id}`, vehicleOwner);
  return response.data;
};

export const getVehicleOwnerById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/vehicle-owners/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteVehicleOwnerById = async (id: string) => {
  const response = await axios.delete(`/api/vehicle-owners/${id}`);
  return response.data;
};
