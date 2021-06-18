import { createSlice } from '@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';

const initialState = {
	countries: [],
	globalData: {},
	countriesData: [],
	isLoading: false,
	error: ''
}

const covidSlice = createSlice({
	name: 'covid',
	initialState,
	reducers: {
		startFetch: (state) => {
			state.isLoading = true;
		},
		endFetch: (state) => {
			state.isLoading = false;
		},
		fetchFail: (state, {payload: error}) => {
			state.error = error || 'Fetch Get Error!';
		},
		getCountries : (state, {payload: countries}) => {
			state.countries = countries;
		},
		getGlobalData: (state, {payload: globalData}) => {
			state.globalData = globalData;
		},
		getCountriesData: (state, {payload: countriesData}) => {
			state.countriesData = countriesData;
		},
	}
});

export const covidManager = () => {
	useInjectReducer({
		key: 'covid',
		reducer: covidSlice.reducer
	})

	return {actions: covidSlice.actions}
}