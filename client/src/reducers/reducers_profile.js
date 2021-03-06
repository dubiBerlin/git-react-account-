import { PROFILE_FETCHED } from '../actions/actions_profile';

/*
 * Receives information by the dispatch() method in action and sees what kind of
 * action has been done.
 * After recognizing it returns the data which the action has received (data from server as example)
 * and puts it into the info variable.
 * So the info variable contains the content which the method in the action has received.
 * It can be an empty array too.
 */
const profile = (state = {}, action) => {
  console.log(' reducers_info.js PAYLOAD', action.payload);
  switch (action.type) {
    case PROFILE_FETCHED:
      return action.payload;
    default:
      return state;
  }
};

// it exports now the info received by the action received by the server to the main reducer (reducers/index.js)
export default profile;
