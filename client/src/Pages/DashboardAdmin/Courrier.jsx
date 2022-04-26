import CourrierAjout from '../../Components/DashboardAdmin/CourrierAjout'
import Page from '../../Layouts/LayoutPage'

function Courrier() {
    return (
        <Page
            title="Courrier"
            content={<CourrierAjout />} />
    )
}

export default Courrier