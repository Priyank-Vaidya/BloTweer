
import { useState, useEffect } from "react";

const useFetch = (url)=>{
    
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, getError] = useState(null);

    useEffect(()=>{
        const abortCont = new AbortController();

        console.log("The program is re rendered")
        fetch('http://localhost:8000/blogs/', {signal :abortCont.signal })
          .then(res =>{ 
                if(res.ok)
                return res.json();
                throw Error('could not fetch data');
          })
          .then((data)=>{
                setData(data);
                setIsPending(false);
                getError(null);
          })
          .catch((e)=>{
                if(e.name ==='AbortError'){
                    console.log("Fetch Aborted");
                }
                else{
                console.log(e.message);
                getError(e.message);
                setIsPending(false);
                }
          })

          return ()=>abortCont.abort();
          
    }, [url]);

    return {data, isPending, error}
}

export default useFetch;