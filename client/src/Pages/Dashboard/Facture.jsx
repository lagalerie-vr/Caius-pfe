
import Page from '../../Layouts/LayoutPage'
import FactureList from '../../Components/Dashboard/FactureList'

export default function Facture() {

    return (
        <Page
            title="Factures"
            content={<FactureList />}
        />
    )
}