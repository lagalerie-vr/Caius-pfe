import { Routes, Route } from "react-router-dom"

import Tutorial from '../../Pages/Dashboard/Tutorial'
import Calendar from '../../Pages/Dashboard/Calendar'
import Error from '../../Pages/Error'
import Expert from '../../Pages/Dashboard/Expert'
import Main from '../../Pages/DashboardClient/Main'

import LayoutDashboardClient from "../../Layouts/LayoutDashboard"


import ProtectedRoutes from "../../Components/ProtectedRoutes"
import Call from "../../Pages/JitsiCall/Call"


const RouteClient = () => (

    <Routes>
        <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/" element={<LayoutDashboardClient />}>
                <Route path='/' element={<Main />} />
                <Route path='/expert' element={<Expert />} />
                <Route path='/Calendar' element={<Calendar />} />
                <Route path='/Tutorial' element={<Tutorial />} />
                <Route path='/Call' element={<Call />} />

                {/*
        <Route path='/Courrier' element={<Tutorial />} />
        <Route path='/Contract' element={<Tutorial />} />
        <Route path='/Facture' element={<Tutorial />} />
        <Route path='/depot' element={<Tutorial />} />
  */}

                <Route path='*' element={<Error />} />
            </Route>
        </Route>

    </Routes>
)

export default RouteClient