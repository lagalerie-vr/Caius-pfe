import { Outlet } from "react-router-dom"
import { useAuth } from "../contexts/AuthProvider"
import RouteAccount from "../Routes/LayoutRoutes/RouteAccount"

const ProtectedRoutes = (props) => {
    const auth = useAuth()
    return auth ? <Outlet /> : <RouteAccount />
}

export default ProtectedRoutes