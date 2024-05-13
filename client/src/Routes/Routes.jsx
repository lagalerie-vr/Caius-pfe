import RouteAdmin from "./LayoutRoutes/RouteAdmin"
import RouteDefault from "./LayoutRoutes/RouteDefault"
import RouteAccount from "./LayoutRoutes/RouteAccount"
import { useUser } from "../contexts/AuthProvider"



export default function Render() {

    const user = useUser()

    if (localStorage.getItem("token")) {
        switch (user.role) {
            case "Admin":
                return <RouteAdmin />;
            case "":
                return <RouteDefault />;
            case "default":
                return <RouteDefault />;
        }
    } else {
        return <RouteAccount />
    }


}


