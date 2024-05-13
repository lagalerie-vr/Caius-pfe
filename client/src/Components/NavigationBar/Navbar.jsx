import NavbarAdmin from './NavbarTypes/NavbarAdmin';

import NavbarDefault from './NavbarTypes/NavbarDefault'
import { useUser } from '../../contexts/AuthProvider'

export default function Navbar() {
    const user = useUser()
    switch (user.role) {
        case "Admin":
            return <NavbarAdmin />;
        default:
            return <NavbarDefault />;
    }
}