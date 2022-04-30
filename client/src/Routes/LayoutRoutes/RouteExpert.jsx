import { Routes, Route } from "react-router-dom"


import Error from '../../Pages/Error'
import LayoutDashboardExpert from "../../Layouts/LayoutDashboard"
import Page from '../../Pages/PageExemple'
import Settings from '../../Pages/Dashboard/Settings'
import ProtectedRoutes from "../ProtectedRoutes"
import Call from "../../Pages/JitsiCall/Call"
import Demande from "../../Pages/DashboardExpert/Demande"
import Questions from "../../Pages/DashboardExpert/Questions"


const RouteExpert = () => (

    <Routes>
        <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/" element={<LayoutDashboardExpert />}>
                <Route path='/' element={<Page />} />
                <Route path='/demande' element={<Demande />} />
                <Route path='/depot' element={<Page />} />
                <Route path='/devis' element={<Questions />} />
                <Route path='/Call' element={<Call />} />
                <Route path='/Settings' element={<Settings />} />
                <Route path='*' element={<Error />} />
            </Route>
        </Route>

    </Routes>
)

export default RouteExpert