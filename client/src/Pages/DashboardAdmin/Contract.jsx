
import Page from '../../Layouts/LayoutPage'
import ContractList from '../../Components/DashboardAdmin/Contract'

export default function Contract() {
    return (
        <Page
            title="Contracts"
            content={<ContractList />}
        />
    )
}