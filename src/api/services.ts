import { getApiUrl, getDeveloperParameterValue } from 'api/utils/uri';
import ApiService from './ApiService';

const getPostHeaders = () => (
  {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  }
);

export const ProblemApiService = new ApiService(getApiUrl(), getDeveloperParameterValue(), getPostHeaders());
