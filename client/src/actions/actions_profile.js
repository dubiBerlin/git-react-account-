export const PROFILE_FETCHED = 'PROFILE_FETCHED';
export const PROFILE_EDITED = 'PROFILE_EDITED';
import { getToken } from '../secret/token';

export function fetchInfo() {
  let header = new Headers({
    'Content-Type': 'application/json',
    Authorization: getToken
  });

  return dispatch => {
    fetch('https://api.github.com/users/dubiBerlin', {
      method: 'GET',
      headers: header
    })
      .then(response => response.json()) // formats the response to a json object
      .then(json => {
        // dispatch alerts the reducer and gives him the action-info
        dispatch(loadProfile(json));
      })
      .catch(error => {
        console.log(error);
      });
  };
}
/*
 * Info that goes to the store in order to inform that data has been fetched
 */
export function loadProfile(results) {
  return {
    type: PROFILE_FETCHED,
    payload: results // the payload has the info what came back with this action info
  };
}
