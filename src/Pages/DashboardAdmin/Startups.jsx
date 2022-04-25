
import Page from '../../Layouts/LayoutPage'
import StartupList from '../../Components/DashboardAdmin/StartupList'

export default function Startups() {
    return (
        <Page
            title="Startups"
            content={<StartupList />}
        />
    )
}