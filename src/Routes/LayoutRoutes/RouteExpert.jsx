import { Routes, Route } from "react-router-dom"


import Error from '../../Pages/Error'
import LayoutDashboardExpert from "../../Layouts/LayoutDashboard"
import Page from '../../Pages/PageExemple'

import ProtectedRoutes from "../../Components/ProtectedRoutes"
import Call from "../../Pages/JitsiCall/Call"


const RouteExpert = () => (

    <Routes>
        <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/" element={<LayoutDashboardExpert />}>
                <Route path='/' element={<Page />} />
                <Route path='/demande' element={<Page />} />
                <Route path='/depot' element={<Page />} />
                <Route path='/question' element={<Page />} />
                <Route path='/Call' element={<Call />} />
                <Route path='*' element={<Error />} />
            </Route>
        </Route>

    </Routes>
)

export default RouteExpert