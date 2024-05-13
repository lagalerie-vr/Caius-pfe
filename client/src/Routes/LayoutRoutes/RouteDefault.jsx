import { Routes, Route } from "react-router-dom"
import Error from '../../Pages/Error'
import Main from '../../Pages/Dashboard/Main'
import Predection from "../../Pages/Dashboard/Predection"
import LayoutDashboardDefault from "../../Layouts/LayoutDashboard"
import ProtectedRoutes from "../ProtectedRoutes"
import Settings from '../../Pages/Dashboard/Settings'




const RouteDefault = () => (

    <Routes>
        <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/" element={<LayoutDashboardDefault />}>
                <Route path='/' element={<Main />} />
                <Route path='/Settings' element={<Settings />} />
                <Route path='*' element={<Error />} />
                <Route path='/Prediction' element={<Predection/>} />

            </Route>
        </Route>

    </Routes>
)

export default RouteDefault