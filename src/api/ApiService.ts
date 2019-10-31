import {ApiOptions, APIResponse, ListParams} from "./types/index";
import pathOr from 'ramda/es/pathOr';
import axios from 'axios';
import keys from 'ramda/es/keys';
import Cookies from "js-cookie";
import isEmpty from 'ramda/es/isEmpty';
import isNil from 'ramda/es/isNil';
import not from 'ramda/es/not';

export default class ApiService {
  url: string;
  options: ApiOptions;
  developer: string;
  constructor(url: string, developer: string, options: ApiOptions = {}) {
    this.url = url;
    this.options = options;
    this.developer = developer;
  }

  processResponse = (response: APIResponse): { [key: string]: any } => {
    if (pathOr('', ['data', 'status'])(response) === 'error') {
      const error: any = pathOr('Unexpected error', ['data', 'message'])(response);
      throw new Error(typeof error === 'string' ? error : error[keys(error)[0]]);
    }
    return pathOr({}, ['data', 'message'])(response);
  };

  isInvalidSession = () => {
    const cookiesToken: string | undefined = Cookies.get('pb-token');
    return isEmpty(cookiesToken) || isNil(cookiesToken);
  };

  get = (params: ListParams) => {
    return axios.get(this.url, { params: { ...params, developer: this.developer } })
      .then((response: APIResponse): { [key: string]: any } => this.processResponse(response))
  };

  post = (body = {}, params = {}) => {
    return axios.post(`${this.url}?developer=${this.developer}`, body, this.options)
      .then((response: APIResponse) => this.processResponse(response))
  };

  securePost = (body = {}, params = {}) => {
    if (this.isInvalidSession()) {
      throw new Error('Ошибка. Сессия устарела.');
    }
    return axios.post(`${this.url}?developer=${this.developer}`, body, this.options)
      .then((response: APIResponse) => this.processResponse(response))
  };

  path = (path: string) => {
    return new ApiService(`${this.url}${path}`, this.developer, this.options,);
  };
};
