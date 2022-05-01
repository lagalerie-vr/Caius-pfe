import { Routes, Route } from "react-router-dom"

import Tutorial from '../../Pages/Dashboard/Tutorial'
import Calendar from '../../Pages/Dashboard/Calendar'
import Error from '../../Pages/Error'
import Expert from '../../Pages/Dashboard/Expert'
import Main from '../../Pages/DashboardDefault/Main'


import LayoutDashboardDefault from "../../Layouts/LayoutDashboard"
import ProtectedRoutes from "../ProtectedRoutes"
import CreationForm from "../../Pages/Forms/CreationForm"
import DomiForm from "../../Pages/Forms/DomiForm"
import StatusForm from "../../Pages/Forms/StatusForm"
import Call from "../../Pages/JitsiCall/Call"
import Autre from "../../Pages/Dashboard/Autre"
import Demande from "../../Pages/Dashboard/Demande"
import Facture from "../../Pages/Dashboard/Facture"
import Settings from '../../Pages/Dashboard/Settings'




const RouteDefault = () => (

    <Routes>
        <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/" element={<LayoutDashboardDefault />}>
                <Route path='/' element={<Main />} />
                <Route path='/expert' element={<Expert />} />
                <Route path='/Calendar' element={<Calendar />} />
                <Route path='/Tutorial' element={<Tutorial />} />
                <Route path='/CreationForm' element={<CreationForm />} />
                <Route path='/Domicilitation' element={<DomiForm />} />
                <Route path='/statut' element={<StatusForm />} />
                <Route path='/Call' element={<Call />} />
                <Route path='/autre' element={<Autre />} />
                <Route path='/facture' element={<Facture />} />
                <Route path='/Settings' element={<Settings />} />

                <Route path='/demande' element={<Demande />} />
                <Route path='*' element={<Error />} />
            </Route>
        </Route>

    </Routes>
)

export default RouteDefault