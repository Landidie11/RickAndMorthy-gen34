import axios from "axios";
import { useState } from "react"


const useFetch = () => {
  const [apiData, setApiData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, sethasError] = useState(false);
  const getApi = url => {
    axios.get(url)
    .then(res => {
      sethasError(false);
      setApiData(res.data);
    })
    .catch(err => {
      sethasError(true);
      console.log(err);
    })
    .finally(() => {
      setIsLoading(false)
    });
  }
  return[apiData,getApi, isLoading, hasError];
}

export default useFetch;