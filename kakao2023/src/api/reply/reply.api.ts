import { ReplyRequest, ReplyResponse } from '@types';
import axiosClient from '../instance';

export const putReply = async (body: ReplyRequest) => {
  const response = await axiosClient.put<ReplyResponse>(`/reply`, {
    body,
  });
  return response.data;
};
