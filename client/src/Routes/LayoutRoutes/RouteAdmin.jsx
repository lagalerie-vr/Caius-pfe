import { Routes, Route } from "react-router-dom"
import Users from '../../Pages/DashboardAdmin/Users'
import Main from '../../Pages/Dashboard/Main'
import Error from '../../Pages/Error'
import LayoutDashboardAdmin from "../../Layouts/LayoutDashboard"

import Settings from '../../Pages/Dashboard/Settings'

import ProtectedRoutes from "../ProtectedRoutes"
import Predection from "../../Pages/Dashboard/Predection"

const RouteAdmin = () => (

    <Routes>
        <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/" element={<LayoutDashboardAdmin />}>
                <Route path='/' element={<Main />} />
                <Route path='/Users' element={<Users />} />
                <Route path='/Prediction' element={<Predection/>} />
                <Route path='/Settings' element={<Settings />} />
                <Route path='*' element={<Error />} />
            </Route>
        </Route>
    </Routes>
)


export default RouteAdmin