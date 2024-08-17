import { useEffect, useState } from "react";

function Api(currency) {
  const [keys, setKeys] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setKeys(res[currency]));
      
      
  },[currency,keys,setKeys]);
  return keys
}   
export default Api;
