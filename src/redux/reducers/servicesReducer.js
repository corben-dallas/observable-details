import { FETCH_SEVICES, INIT_FETCH, SERVICES_REQUEST_FAILURE, SERVICES_REQUEST_SUCCESS } from "../actions/actionTypes";

const initialState = {
	isLoading: false,
	items: [],
	error: '',
}

const servicesReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_SEVICES: 
			return { ...state, isLoading: true, error: '' };
		case SERVICES_REQUEST_SUCCESS:
			const { items } = action.payload;
			return { ...state, items, isLoading: false };
		case SERVICES_REQUEST_FAILURE:
			const { error } = action.payload;
			console.log('error', error);
			return { ...state, error, items: [], isLoading: false}
		case INIT_FETCH:
		default:
			return state;
	}
};

export default servicesReducer;
