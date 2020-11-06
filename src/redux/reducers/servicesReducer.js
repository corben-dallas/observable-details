import { 
	FETCH_SEVICES, 
	INIT_FETCH, 
	SERVICES_REQUEST_FAILURE, 
	SERVICES_REQUEST_SUCCESS, 
	FETCH_SERVICE_INFO,
	SERVICE_INFO_REQUEST_SUCCESS,
	INIT_FETCH_SERVICE_INFO,
} from "../actions/actionTypes";

const initialState = {
	isLoading: false,
	items: [],
	error: '',
	service: null,
}

const servicesReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_SEVICES:
		case INIT_FETCH_SERVICE_INFO: 
			return { ...state, isLoading: true, error: '' };
		case SERVICES_REQUEST_SUCCESS:
			const { items } = action.payload;
			return { ...state, isLoading: false, items, };
		case SERVICE_INFO_REQUEST_SUCCESS: 
			const { service } = action.payload;
			return {...state, isLoading: false, service}
		case SERVICES_REQUEST_FAILURE:
			const { error } = action.payload;
			return { ...state, error, items: [], isLoading: false}
		case FETCH_SERVICE_INFO:
		case INIT_FETCH:
		default:
			return state;
	}
};

export default servicesReducer;
