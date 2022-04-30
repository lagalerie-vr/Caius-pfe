
import Page from '../../Layouts/LayoutPage'
import Faq from '../../Components/DashboardExpert/Faq'

export default function Questions() {
    return (
        <Page
            title="Demande d'accompagnement"
            content={<Faq />}
        />
    )
}