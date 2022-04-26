import RouteAdmin from "./LayoutRoutes/RouteAdmin"
import RouteExpert from "./LayoutRoutes/RouteExpert"
import RouteClient from "./LayoutRoutes/RouteClient"
import RouteDefault from "./LayoutRoutes/RouteDefault"

import { user } from "../contexts/AuthProvider"

export default function Render() {

    switch (user.role) {
        case "Admin":
            return <RouteAdmin />;
        case "Expert":
            return <RouteExpert />;
        case "Client":
            return <RouteClient />;
        default:
            return <RouteDefault />;
    }
}


