import { connect } from 'react-redux';
import { fetchProfile } from '../actions/actions_profile';

import ProfileComponent from '../components/Profile';

/********************************************
 * Container holds the props of a component *
 ********************************************/

// takes the universal state, which is definded in the reducers/index.js combineReducers method,
// out of the global app enviornmant and puts it to the props of this component
const mapStateToProps = state => {
  console.log('containers/App.js state: ' + JSON.stringify(state));
  return {
    // we givbe this variable JUST this information, cause the state can hold more data from
    // different components
    profile: state.profile
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchProfile: () => {
      dispatch(fetchProfile());
    }
  };
};

// connecting received props with the component
const Profile = connect(mapStateToProps, mapDispatchToProps)(ProfileComponent);

export default Profile;
