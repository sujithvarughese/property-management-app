// axios
import axios from "axios";
import { wrapper } from "axios-cookiejar-support";
import { CookieJar } from "tough-cookie"
import { config } from "../../constants.js";


const ax = axios.create({
	baseURL: config.url.API_URL,
	withCredentials: true,
	keepAlive: true

});
// response
ax.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		// console.log(error.response)
		return Promise.reject(error);
	}
);

// to fetch fmr HUD data
const axHUD = axios.create({
	baseURL: import.meta.env.VITE_HUD_URL,
	headers : {
		Authorization : `Bearer ${import.meta.env.VITE_HUD_TOKEN}`
	}
})

// response
axHUD.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		// console.log(error.response)
		return Promise.reject(error);
	}
);

export { ax, axHUD }