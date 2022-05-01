import RouteAdmin from "./LayoutRoutes/RouteAdmin"
import RouteExpert from "./LayoutRoutes/RouteExpert"
import RouteClient from "./LayoutRoutes/RouteClient"
import RouteDefault from "./LayoutRoutes/RouteDefault"
import RouteAccount from "./LayoutRoutes/RouteAccount"
import { useUser } from "../contexts/AuthProvider"



export default function Render() {

    const user = useUser()

    if (localStorage.getItem("token")) {
        switch (user.role) {
            case "Admin":
                return <RouteAdmin />;
            case "Expert":
                return <RouteExpert />;
            case "Client":
                return <RouteClient />;
            case "default":
                return <RouteDefault />;
        }
    } else {
        return <RouteAccount />
    }


}


