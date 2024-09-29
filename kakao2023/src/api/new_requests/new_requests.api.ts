import { NewRequestsResponse } from '@types';
import axiosClient from '../instance';

export const putNewRequest = async () => {
  const response = await axiosClient.get<NewRequestsResponse>(`/new_request`);
  return response.data;
};
