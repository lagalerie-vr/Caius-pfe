import Page from '../../Layouts/LayoutPage'
import DemandeList from '../../Components/Dashboard/DemandeList'

export default function Main() {

    return (
        <Page
            title="Mes demande"
            content={<DemandeList />}
        />
    )
}