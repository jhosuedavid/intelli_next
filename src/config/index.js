import {ENDPOINTS, SUPER_HERO_ENDPOINTS} from './constants';
import {ENV, VERSION, API, SUPER_HERO} from './env';

export const API_URL = `${API[ENV]}/${VERSION}`;
export const AUTH_ENDPOINTS = ENDPOINTS.auth;
export const DEVICES_ENDPOINTS = ENDPOINTS.devices;
export const SUPER_HEROES_ENDPOINT = SUPER_HERO_ENDPOINTS.heroes;
export const SUPER_HERO_API_URL = `${SUPER_HERO[ENV].url}/${SUPER_HERO[ENV].accessKey}`;
