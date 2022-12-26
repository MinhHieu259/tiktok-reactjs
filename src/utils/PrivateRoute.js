import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = ({children, ...rest}) => {
    let auth = {'token': true} //hihi

    return (
       auth.token ? <Outlet /> : <Navigate to="/"/>
    );
}

export default PrivateRoute