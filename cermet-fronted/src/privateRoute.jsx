import React, { useContext } from 'react'
import {Redirect, Route} from "react-router-dom";
import { UserContext } from './UserContext';
import {getUser} from './controller'


const PrivateRoute = ({component:Component,...rest}) => {
    const{user, setUser} = useContext(UserContext)
    const check = async () => (user === await getUser())
    return (
        <Route {...rest}
        render={props => 
            user ? 
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
