import Page from '../../Layouts/LayoutPage'
import UserList from '../../Components/DashboardAdmin/UserList'

export default function Users() {
    return (
        <Page
            title="Utilisateur"
            content={<UserList />}
        />
    )
}
