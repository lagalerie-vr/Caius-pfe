
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from "../contexts/AuthProvider"

const PublicRoutes = (props) => {

    const auth = useAuth()

    return auth ? <Navigate to="/" /> : <Outlet />
}

export default PublicRoutes;