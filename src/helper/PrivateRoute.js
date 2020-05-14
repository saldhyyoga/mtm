import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import Cookies from 'js-cookie';

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route
    {...rest}
    render={props =>  Cookies.get('authToken') /*localStorage.getItem("authToken") && localStorage.getItem("authEnc")*/ ? (
        <Component {...props} />
    ) : (
        <Redirect to={{
            pathname: "/login"
        }}
        />
    )
    }
    />
    
)
export default PrivateRoute;