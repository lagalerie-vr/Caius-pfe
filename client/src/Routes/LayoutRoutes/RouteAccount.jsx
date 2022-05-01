import { Routes, Route } from "react-router-dom"
import PublicRoutes from "../PublicRoutes"


import Login from '../../Pages/login'
import Register from "../../Pages/register"

const RouteAccount = () => (

    <Routes>
        <Route path="/" element={<PublicRoutes />}>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Login />} />
        </Route>
    </Routes>
)

export default RouteAccount