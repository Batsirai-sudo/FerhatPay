import { KEYS } from '@constants';
import includes from 'lodash/includes';
import axios from 'axios';

function generalUrl() {
	let API;
	// FetchData.post("/otp-resend", {
	//   id: this.state.idText,
	// })
	// const isWC = url.indexOf('/wc/') === 0;
	const isQuery = ['?'].indexOf('?') >= 0;
	const signQuery = isQuery ? '&' : '?';

	let isAgent, isUser;
	let SECRET;

	if (isAgent) {
		API = `api_key=${KEYS.AGENT_API_KEY}&secret=${SECRET}`;
	}
	if (isUser) {
		API = `api_key=${KEYS.CLIENT_API_KEY}&secret=${SECRET}`;
	}

	const baseURL = axios.create({
		baseURL: KEYS.API,
		timeout: 10000,
	});

	//  const baseURL = `${instance}/url`

	return {
		baseURL,
		API,
		// isQuery,
	};
}

// FetchData.post("/otp-resend/user?ID=123", {
//   id: this.state.idText,
// })

const get = async (endpoint: any, req: any, options = {}, token = null) => {
	// return new Promise(async(resolve, reject) => {
	const { baseURL } = generalUrl();
	// const contentType = 'application/json';
	const signQuery = '?';
	let path;

	if (req) {
		path = `/${endpoint}${signQuery}${req}`;
	} else {
		path = `/${endpoint}`;
	}

	const response = await baseURL.get(path);
	return response;
	//  resolve(response);

	// fetch(baseURL, {
	//   ...options,
	//   method: 'GET',
	//   headers: {
	//     Accept: 'application/json',
	//     'Content-Type': contentType,
	//     Authorization: !isWC && token ? `Bearer ${token}` : null,
	//   },
	// })
	// .then((res) => res.json())
	// .then((data) => {
	//   if (data.code) {
	//     reject(new Error(data.message));
	//   } else {
	//     resolve(data);
	//   }
	// })
	// .catch((error) => {
	//   console.log(error);
	//   reject(error);
	// });
	// });
};
const post = async (endpoint: any, data: any, method: any, token: any) => {
	// return new Promise(async(resolve, reject) => {
	const { baseURL } = generalUrl();
	// const contentType = 'application/json';

	const path = `/${endpoint}`;
	const response = await baseURL.get(path, data);
	return response;
	//  resolve(response);

	// fetch(baseURL, {
	//   ...options,
	//   method: 'GET',
	//   headers: {
	//     Accept: 'application/json',
	//     'Content-Type': contentType,
	//     Authorization: !isWC && token ? `Bearer ${token}` : null,
	//   },
	// })
	// .then((res) => res.json())
	// .then((data) => {
	//   if (data.code) {
	//     reject(new Error(data.message));
	//   } else {
	//     resolve(data);
	//   }
	// })
	// .catch((error) => {
	//   console.log(error);
	//   reject(error);
	// });
	// });
};

// const post = async (url, data, method = 'POST', token) => {
//   return new Promise((resolve, reject) => {
//     const {baseURL, isWC} = generalUrl(url);
//     const contentType = includes(url, 'media')
//       ? 'multipart/form-data'
//       : 'application/json';
//     fetch(baseURL, {
//       method: method,
//       headers: {
//         Accept: 'application/json',
//         Authorization: !isWC && token ? `Bearer ${token}` : null,
//         'Content-Type': contentType,
//       },
//       body: data,
//     })
//       .then((res) => res.json())
//       .then((dataApi) => {
//         if (dataApi.code) {
//           reject(new Error(dataApi.message));
//         } else {
//           resolve(dataApi);
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//         reject(error);
//       });
//   });
// };

export default {
	get,
	put: (endpoint: any, data: any, token: any) => post(endpoint, data, 'PUT', token),
	delete: (endpoint: any, data: any, token: any) => post(endpoint, data, 'DELETE', token),
	modify: (endpoint: any, data: any, token: any) => post(endpoint, data, 'MODIFY', token),
};
