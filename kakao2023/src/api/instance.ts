import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

function createAxios(requestConfig: AxiosRequestConfig): AxiosInstance {
  const axiosInstance = axios.create({
    baseURL: requestConfig.baseURL,
    headers: {
      'X-Auth-Token': 'fa41d18748a7bd9bc37edeb9f8b896ef',
      'Content-Type': 'application/json',
    },
  });

  axiosInstance.interceptors.request.use(config => {
    const authKey = localStorage.getItem('authorization') ?? '';
    config.headers.Authorization = authKey;
    return config;
  });

  axiosInstance.interceptors.response.use(
    response => response,
    async error => {
      const errorData = error.response?.data;
      const status = error.response?.status;
      console.log(status);
      return Promise.reject(errorData || error);
    },
  );

  return axiosInstance;
}
const axiosClient = createAxios({ baseURL: import.meta.env.VITE_API_BASE_URL });

export default axiosClient;
