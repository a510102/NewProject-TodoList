import request from '../../uitls/request';

const url = 'https://api.covid19api.com';

const summary = 'summary';
const countries = 'countries';

const fetchCovidData = (path) => {
	const data = await request(`${url}/${path}`);
	return data;
}

export {
	fetchCovidData,
	summary,
	countries
};