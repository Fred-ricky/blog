import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const abortControl = new AbortController();

        fetch(url, {signal: abortControl.signal})
            .then(res => {
                if (!res.ok) {
                    throw Error('COULD NOT FETCH THE DATA');
                }
              return res.json();
            })
            .then(data => {
                setIsPending(false);
                setData(data);
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AboutError') {
                    console.log('fetch abouted')
                } else {
                    setIsPending(false);
                    setError(err.message);     
                }
                
            })

            return () => abortControl.abort()

       }, [url])

       return { data, isPending, error};
};

export default useFetch;