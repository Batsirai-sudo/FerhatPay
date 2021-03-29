import { request } from '@utils';

const genUrl = (url: string) => `authentication/${url}`;

export const requestOtp = (data: any) => request.post(genUrl('requestOTP'), { mobile: data });

export const verifyOtp = (data: any) => request.post(genUrl('verifyOTP'), data);

export const resendOtp = (data: any) => request.post(genUrl('resendOTP'), data);

export const register = (data: any) => request.post(genUrl('registration'), data);

export const loginWithAccountAndPassword = (data: any) => request.post(genUrl('login'), data);

export const resetPassword = (data: any) => request.post(genUrl('resetPassword'), data);

// export const loginWithEmail = (data) =>
//   request.post('/mobile-builder/v1/login', data);

// export const settingProfile = (data, token) =>
//   request.post('/mobile-builder/v1/wcfm-profile-settings', data, 'POST', token);

// export const forgotPassword = (data) =>
//   request.post('/mobile-builder/v1/lost-password', JSON.stringify(data));

// export const getCustomer = (customerId) =>
//   request.get(`/wc/v3/customers/${customerId}`);
