import { KEYS } from '@constants';
import includes from 'lodash/includes';
import axios from 'axios';

function generalUrl() {
	let API = 120;
	let isAgent, isUser;
	let SECRET = 2526;
	if (isAgent) {
		API = KEYS.AGENT_API_KEY;
	}
	if (isUser) {
		API = KEYS.CLIENT_API_KEY;
	}
	const baseURL = axios.create({
		baseURL: KEYS.API,
		timeout: 10000,
		headers: {
			'x-api-key': API,
			'x-secret-key': SECRET,
		},
	});
	return {
		baseURL,
	};
}

const get = async (endpoint: any, req: any, options = {}, token = null) => {
	const { baseURL } = generalUrl();
	const signQuery = '?';
	let path;

	if (req) {
		path = `/${endpoint}${signQuery}${req}`;
	} else {
		path = `/${endpoint}`;
	}
	console.log(path);
	const response = await baseURL.get(path);
	return response;
};
const post = async (endpoint: any, data: any, method: 'POST', token: any) => {
	const { baseURL } = generalUrl();
	const path = `/${endpoint}`;
	const response = await baseURL.post(path, data);
	return response;
};

export default {
	get,
	post,
	put: (endpoint: any, data: any, token: any) => post(endpoint, data, 'PUT', token),
	delete: (endpoint: any, data: any, token: any) => post(endpoint, data, 'DELETE', token),
	modify: (endpoint: any, data: any, token: any) => post(endpoint, data, 'MODIFY', token),
};
