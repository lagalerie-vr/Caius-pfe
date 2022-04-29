import Page from '../../Layouts/LayoutPage'
import Settings from '../../Components/Dashboard/Settings'

export default function Main() {

    return (
        <Page
            title="Paramétre"
            content={<Settings />}
        />
    )
}