import axios from 'axios';

import {ENDPOINTS} from './constants';
import {ENV, VERSION, API} from './env';

export const API_URL = `${API[ENV]}/${VERSION}`;
export const AUTH_ENDPOINTS = ENDPOINTS.auth;
export const DEVICES_ENDPOINTS = ENDPOINTS.devices;

axios.defaults.baseURL = API_URL;
