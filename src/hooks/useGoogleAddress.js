import { useState, useEffect } from 'react';
import axios from 'axios';

const useGoogleAddress = address => {
  const [map, setMap] = useState({});
  const API = `http://api.positionstack.com/v1/forward?access_key=f022f6fa9d4a09db3f48320dfa092293&query=${address}`;
  
//   useEffect(async () => {
//     const response = await axios(API);
//     setMap(response.data.data[0]);
//   }, []);
  useEffect(() => {
    async function handler() {
        const response = await axios(API);
        setMap(response.data.data[0]);
    }
    handler();
}, []);
return map;
};
  

export default useGoogleAddress;