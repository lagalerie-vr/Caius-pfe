
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoutes = (props) => {

    const user = localStorage.getItem("token");
    return user ? <Navigate to="/" /> : <Outlet />
}

export default PublicRoutes;