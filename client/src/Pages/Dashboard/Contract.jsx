
import Page from '../../Layouts/LayoutPage'
import ContractPage from '../../Components/Dashboard/Contract'

export default function Contract() {

    return (
        <Page
            title="Contrats"
            content={<ContractPage />}
        />
    )
}