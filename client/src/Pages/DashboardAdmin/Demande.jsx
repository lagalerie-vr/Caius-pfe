
import Page from '../../Layouts/LayoutPage'
import DemandeList from '../../Components/DashboardAdmin/DemandeList'

export default function Contract() {
    return (
        <Page
            title="Demande Utilisateurs "
            content={<DemandeList />}
        />
    )
}