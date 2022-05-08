
import Page from '../../Layouts/LayoutPage'
import StatutList from '../../Components/Dashboard/StatutList'

export default function Statuts() {

    return (
        <Page
            title="Mes Statuts"
            content={<StatutList />}
        />
    )
}