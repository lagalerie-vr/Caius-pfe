import Courrier from '../../Components/DashboardClient/Courrier'
import Page from '../../Layouts/LayoutPage'

function CourrierList() {
    return (
        <Page
            title="Courrier"
            content={<Courrier />} />
    )
}

export default CourrierList