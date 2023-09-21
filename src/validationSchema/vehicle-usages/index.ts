import * as yup from 'yup';

export const vehicleUsageValidationSchema = yup.object().shape({
  date: yup.date().required(),
  distance_travelled: yup.number().integer().required(),
  fuel_consumed: yup.number().integer().required(),
  vehicle_id: yup.string().nullable().required(),
});
