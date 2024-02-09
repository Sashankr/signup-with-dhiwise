import { apis } from "service";

const COMMON_URL = `https://5f4f6f-ion3-sandbox.dhiwise.co/admin/auth/`;

const API_URLS = {
  POST_AUTH_REGISTER: `${COMMON_URL}register`,
  POST_AUTH_LOGIN: `${COMMON_URL}login`,
};

export const postAuthRegister = (payload) =>
  apis.post(API_URLS.POST_AUTH_REGISTER, payload);

export const postAuthLogin = (payload) =>
  apis.post(API_URLS.POST_AUTH_LOGIN, payload);
