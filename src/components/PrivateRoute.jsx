import React from 'react';
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

const PrivateRoute = (props) => {
    console.log(props)
    if (!props.token) {
        return <Navigate to={'/login'}/>
    }

    return props.children
};

const mapStateToProps = (state) => {
    return {
        token: state.token.access_token,
    }
}


export default connect(mapStateToProps)(PrivateRoute);