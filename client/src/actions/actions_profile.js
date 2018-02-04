import { getToken } from '../secret/token';
export const PROFILE_FETCHED = 'PROFILE_FETCHED';
export const PROFILE_EDITED = 'PROFILE_EDITED';

export function fetchProfile() {
  var token = getToken();

  console.log('TOKEN: ' + token);

  let header = new Headers({
    'Content-Type': 'application/json',
    Authorization: token
  });

  return dispatch => {
    fetch('https://api.github.com/users/dubiBerlin', {
      method: 'GET',
      Headers: header
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
