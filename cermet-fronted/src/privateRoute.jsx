import React from 'react'
import {Redirect, Route} from "react-router-dom";
import Cookie from 'js-cookie';

const PrivateRoute = ({component:Component,...rest}) => {
    return (
        <Route {...rest}
        render={props => 
            Cookie.get('connect.sid') ? 
                <Component {...props} />
                :
                <Redirect to={{
                    pathname: "/admin",
                    state: {from:props.location}
                }}/>
            }
            />
            )
}

export default PrivateRoute
