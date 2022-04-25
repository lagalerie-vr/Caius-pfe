import { Routes, Route } from "react-router-dom"
import PublicRoutes from "../../Components/PublicRoutes"
import Error from "../../Pages/Error"


import Login from '../../Pages/login'
import Register from "../../Pages/register"

const RouteAccount = () => (

    <Routes>
        <Route path="/" element={<PublicRoutes />}>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Error />} />
        </Route>
    </Routes>
)

export default RouteAccount