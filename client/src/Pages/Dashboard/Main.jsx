
import Page from '../../Layouts/LayoutPage'
import Stats from '../../Components/Dashboard/Main'
import { useUser } from '../../contexts/AuthProvider'
export default function Main() {
    const user = useUser()
    return (

        <Page
            title={`Bonjour, ${user.nom} !`}
            content={<Stats />}
        />
    )
}