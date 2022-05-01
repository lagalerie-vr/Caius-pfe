import { useEffect, useState } from "react";
import API from "../api/api";
import UserID from "../data/Functions/UserID";



export function useUser() {

    const token = localStorage.getItem("token")

    const userData = async (id) => {
        const data = await API.get(`/users/user/${id}`)
        return data.data;

    }

    useEffect(() => {
        async function fetch() {
            const id = UserID(localStorage.getItem("token"))
            const data = await userData(id)
            setOutput(data)
            setUserFound(true)
        }
        fetch()

    }, [token])



    const [userFound, setUserFound] = useState(false);
    const [output, setOutput] = useState([]);

    if (userFound) {
        return output
    } else {
        return userFound
    }
}