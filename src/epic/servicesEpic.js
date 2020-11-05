import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, filter, debounceTime, switchMap, catchError } from 'rxjs/operators';
import { FETCH_SEVICES, INIT_FETCH } from '../redux/actions/actionTypes';
import { fetchServises, servicesRequestError, servicesRequestSuccess } from '../redux/actions/servicesAction';


export const initFectchEpic = action$ => action$.pipe(
	ofType(INIT_FETCH),
	debounceTime(100),
	map(o => fetchServises()),
);

export const fetchSevricesEpic = action$ => action$.pipe(
	ofType(FETCH_SEVICES),
	switchMap(o => ajax.getJSON('http://localhost:7080/api/services').pipe(
		map(items => servicesRequestSuccess(items)),
		catchError(error => of(servicesRequestError(error.message))),
	)),
	);
	