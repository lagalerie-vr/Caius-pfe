import { Routes, Route } from "react-router-dom"
import Users from '../../Pages/DashboardAdmin/Users'
import Main from '../../Pages/DashboardAdmin/Main'
import Calendar from '../../Pages/DashboardAdmin/Calendar'
import Tutorial from '../../Pages/DashboardAdmin/Tutorial'
import Error from '../../Pages/Error'
import LayoutDashboardAdmin from "../../Layouts/LayoutDashboard"
import Facture from '../../Pages/DashboardAdmin/Facture'
import Contract from '../../Pages/DashboardAdmin/Contract'
import DemandeList from '../../Pages/DashboardAdmin/Demande'

import ProtectedRoutes from "../ProtectedRoutes"
import Courrier from "../../Pages/DashboardAdmin/Courrier"
import Call from "../../Pages/JitsiCall/Call"

const RouteAdmin = () => (

    <Routes>
        <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/" element={<LayoutDashboardAdmin />}>
                <Route path='/' element={<Main />} />
                <Route path='/Users' element={<Users />} />
                <Route path='/Calendar' element={<Calendar />} />
                <Route path='/Tutorial' element={<Tutorial />} />
                <Route path='/Courrier' element={<Courrier />} />
                <Route path='/facture' element={<Facture />} />
                <Route path='/Contract' element={<Contract />} />
                <Route path='/demande' element={<DemandeList />} />
                <Route path='/Call' element={<Call />} />
                <Route path='*' element={<Error />} />
            </Route>
        </Route>
    </Routes>
)

export default RouteAdmin