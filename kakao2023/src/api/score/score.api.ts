import { ScoreResponse } from '@types';
import axiosClient from '../instance';

export const getScore = async () => {
  const response = await axiosClient.get<ScoreResponse>(`/score`);
  return response.data;
};
