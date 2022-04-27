import { useEffect, useState } from "react";
import API from "../api/api";
import GetUserId from "../data/Functions/GetUserId";



export function useUser() {

    const token = localStorage.getItem("token")

    const userData = async (id) => {
        const data = await API.get(`/users/user/${id}`)
        return data.data;

    }

    useEffect(() => {
        async function fetch() {
            const id = GetUserId(localStorage.getItem("token"))
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