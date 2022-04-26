import NavbarAdmin from './NavbarTypes/NavbarAdmin';
import NavbarExpert from './NavbarTypes/NavbarExpert';
import NavbarClient from './NavbarTypes/NavbarClient'
import NavbarDefault from './NavbarTypes/NavbarDefault'

import { user } from "../../contexts/AuthProvider"


export default function Navbar() {
    switch (user.role) {
        case "Admin":
            return <NavbarAdmin />;
        case "Expert":
            return <NavbarExpert />;
        case "Client":
            return <NavbarClient />;
        default:
            return <NavbarDefault />;
    }
}