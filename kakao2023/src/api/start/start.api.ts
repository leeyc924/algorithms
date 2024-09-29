import axiosClient from '../instance';
import { StartRequest, StartResponse } from '@types';

export const postStart = async (body: StartRequest) => {
  // const response = await axiosClient.post<StartResponse>(`/start`, {
  //   body,
  // });
  // return response.data;

  const response: StartResponse =
    body.problem === 1
      ? {
          auth_key: '1f97dd79-52b2-45c3-ae65-2021d0955ebb',
          problem: 1,
          day: 1,
        }
      : {
          auth_key: '26870aca-7b7e-4d51-9741-eeee6607e970',
          problem: 2,
          day: 1,
        };
  return response;
};
