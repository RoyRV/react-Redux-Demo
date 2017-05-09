import AuthorApi from '../api/mockAuthorApi';
import * as types from  './ActionTypes';
import {beginAjaxCall} from './AjaxStatusActions';

export function loadAuthorSuccess(authors){
	return {type : types.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors(){
	return dispatch => {
		dispatch(beginAjaxCall());
		return AuthorApi.getAllAuthors().then(authors => {
			dispatch(loadAuthorSuccess(authors));
		}).catch(error => {
			throw(error);
		});
	};
}