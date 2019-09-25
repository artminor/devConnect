import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import Spinner from '../layout/spinner.gif';

const Dashboard = ({getCurrentProfile, auth, profile:{profile, laoding}}) => {
    useEffect(() => {
        getCurrentProfile();
    }, [])
    //if no profile and still loading load spinner
  return loading && profile == null?<Spinner/>:<Fragment>test dashboard</Fragment>;
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
  profile: PropTypes.object.isRequired
};


const mapStateToProps=state=>({auth:state.auth,
    profile:state.profile});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Dashboard);
