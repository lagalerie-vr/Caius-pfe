
import Page from '../../Layouts/LayoutPage'
import Stats from '../../Components/DashboardAdmin/Main'
export default function Main() {
    return (
        <Page
            title="Dashboard"
            content={<Stats />}
        />
    )
}