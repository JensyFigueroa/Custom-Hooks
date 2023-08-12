import { useCallback, useEffect, useState } from "react"

export const useFecth = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(null)

    const fetchData = useCallback(async () => {
        setLoading(true)

        try {
            const res = await fetch(url);

            if (!res.ok) throw new Error('Error consuming API')
            const data = await res.json()

            setData(data);

        } catch (error) {
            console.log(error.message)
            setErrors(error.message)
            setData([])
        } finally {
            setLoading(false)
        }

    }, [])

    useEffect(() => {
        fetchData()
    }, [])

    return { data, loading, errors }
}