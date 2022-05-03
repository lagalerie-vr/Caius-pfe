import Page from "../../Layouts/LayoutPage";
import CTA from "../../Components/DashboardDefault/CTA";
import { useUser } from "../../contexts/AuthProvider";

export default function Main() {
    const user = useUser()
    return (

        <Page
            title={`Bonjour, ${user.nom} !`}
            content={<CTA />}
        />
    )
}
