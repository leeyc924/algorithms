import { SimulateRequest, SimulateResponse } from '@types';
import axiosClient from '../instance';

export const putSimulate = async (body: SimulateRequest) => {
  const response = await axiosClient.put<SimulateResponse>(`/simulate`, {
    body,
  });
  return response.data;
};
