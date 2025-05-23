import { QueryClient, useQuery } from "@tanstack/react-query";
import authFetch from "./Axios/Axios";
import { useState, useEffect } from "react";


export const useFetchData =  (params) => {
    const {data, isLoading, isError} = useQuery({
        queryKey:['colection', params],
        queryFn: async({ queryKey }) => {
            const [, params] = queryKey;
            
            const {data} = await authFetch.get(`/search/collections?per_page=20 &query=${params.topic}`)
        return data
    },
        enabled: !!params,
    })
    return {data, isLoading, isError}
}


export const useEffectData = (url,option={}) => {

    const [data2, setData2] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    

    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;

        const fetchDataTwo = async() => {
                setLoading(true)
            try {
                const response = await authFetch.get(url, {signal})
                setData2(response.data)
            } catch (error) {
                if(authFetch.isCancel(error)){
                    console.log('club')
                }else{
                    setError(error)
                }
            }
            finally {
                setLoading(false)
            }
        }

        fetchDataTwo()

        return () => {
            controller.abort();
        }
    },[url])

    return {data2, error, loading}
}
