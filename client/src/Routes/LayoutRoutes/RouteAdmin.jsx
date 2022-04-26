import { Routes, Route } from "react-router-dom"
import Users from '../../Pages/DashboardAdmin/Users'
import Startups from '../../Pages/DashboardAdmin/Startups'
import Main from '../../Pages/DashboardAdmin/Main'
import Calendar from '../../Pages/DashboardAdmin/Calendar'
import Tutorial from '../../Pages/DashboardAdmin/Tutorial'
import Error from '../../Pages/Error'
import LayoutDashboardAdmin from "../../Layouts/LayoutDashboard"
import Facture from '../../Pages/DashboardAdmin/Facture'
import Contract from '../../Pages/DashboardAdmin/Contract'



import ProtectedRoutes from "../../Components/ProtectedRoutes"
import Courrier from "../../Pages/DashboardAdmin/Courrier"
import Call from "../../Pages/JitsiCall/Call"


const RouteAdmin = () => (

    <Routes>
        <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/" element={<LayoutDashboardAdmin />}>
                <Route path='/' element={<Main />} />
                <Route path='/Users' element={<Users />} />
                <Route path='/Startups' element={<Startups />} />
                <Route path='/Calendar' element={<Calendar />} />
                <Route path='/Tutorial' element={<Tutorial />} />
                <Route path='/Courrier' element={<Courrier />} />
                <Route path='/invoice' element={<Facture />} />
                <Route path='/Contract' element={<Contract />} />
                <Route path='/Call' element={<Call />} />
                <Route path='*' element={<Error />} />
            </Route>
        </Route>
    </Routes>
)

export default RouteAdmin