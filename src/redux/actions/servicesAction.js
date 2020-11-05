import { FETCH_SEVICES, INIT_FETCH, SERVICES_REQUEST_FAILURE, SERVICES_REQUEST_SUCCESS } from "./actionTypes";

export const initFetch = () => ({
	type: INIT_FETCH,
});

export const fetchServises = () => ({
	type: FETCH_SEVICES,
});

export const servicesRequestSuccess = items => ({
	type: SERVICES_REQUEST_SUCCESS,
	payload: { items },
});

export const servicesRequestError = error => ({
	type: SERVICES_REQUEST_FAILURE,
	payload: { error },
});


