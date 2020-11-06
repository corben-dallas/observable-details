import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, filter, debounceTime, switchMap, catchError } from 'rxjs/operators';
import { FETCH_SEVICES, INIT_FETCH, INIT_FETCH_SERVICE_INFO, FETCH_SERVICE_INFO } from '../redux/actions/actionTypes';
import { fetchServiceInfo, fetchServises, serviceInfoRequestSuccess, servicesRequestError, servicesRequestSuccess } from '../redux/actions/servicesAction';


export const initFectchEpic = action$ => action$.pipe(
	ofType(INIT_FETCH),
	debounceTime(100),
	map(o => fetchServises()),
);

export const fetchSevricesEpic = action$ => action$.pipe(
	ofType(FETCH_SEVICES),
	switchMap(() => ajax.getJSON('http://localhost:7060/api/services').pipe(
		map(items => servicesRequestSuccess(items)),
		catchError(error => of(servicesRequestError(error.message))),
	)),
);

export const initFetchServiceInfoEpic = action$ => action$.pipe(
	ofType(INIT_FETCH_SERVICE_INFO),
	map(o => {
		const { id } = o.payload;
		return fetchServiceInfo(id);
	}),
);

export const fetchServiceInfoEpic = action$ => action$.pipe(
	ofType(FETCH_SERVICE_INFO),
	switchMap(o => {
		const { id } = o.payload;
		return ajax.getJSON(`http://localhost:7060/api/services/${id}`).pipe(
			map(item => serviceInfoRequestSuccess(item)),
			catchError(error => of(servicesRequestError(error.message))),
		)
	}),
);