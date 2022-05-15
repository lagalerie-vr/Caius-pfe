
import Page from '../../Layouts/LayoutPage'
import DemandeList from '../../Components/DashboardExpert/DemandeList'

export default function Contract() {
    return (
        <Page
            title="Demandes des Utilisateurs "
            content={<DemandeList />}
        />
    )
}