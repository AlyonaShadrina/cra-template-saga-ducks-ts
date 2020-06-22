import axios from 'axios';
import { BASE_URI_API } from '../config';

type TRequest = {
  method: 'get' | 'post' | 'delete' | 'put' | 'patch';
  path: string;
  data: { [key: string]: any };
}

const request = (method: TRequest['method'], path: TRequest['path'], data: TRequest['data'] = {}) => {
  const headers = {};

  return axios({
    method,
    url: BASE_URI_API + path,
    data,
    headers,
  });
};

export const get = (path: TRequest['path']) => request('get', path);

export const post = (path: TRequest['path'], data: TRequest['data']) => request('post', path, data);

export const del = (path: TRequest['path']) => request('delete', path);

export const put = (path: TRequest['path'], data: TRequest['data']) => request('put', path, data);

export const patch = (path: TRequest['path'], data: TRequest['data']) => request('patch', path, data);
