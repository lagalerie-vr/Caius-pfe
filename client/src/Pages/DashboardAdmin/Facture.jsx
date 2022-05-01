
import Page from '../../Layouts/LayoutPage'
import FactureList from '../../Components/DashboardAdmin/Facture'

export default function Facture() {

    return (
        <Page
            title="Factures"
            content={<FactureList />}
        />
    )
}