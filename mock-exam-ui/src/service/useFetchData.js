import {useEffect, useState} from "react";
import axios from "axios";
import {getCookie} from "./cookies-service";

const useFetchData = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setPending] = useState(true)
    const [error, setError] = useState(null)

    const token = getCookie("token");

    useEffect(() => {
        axios.get(url, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(response => {
                setData(response.data)
                setPending(false)
                setError(null)
            }).catch(error => {
                setPending(false)
                setError(error)
        })
    }, [url])


    return {data, isPending, error}
}

export default useFetchData