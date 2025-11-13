import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function App(){
  const [url, setUrl] = useState<string | null>(null);

  async function fetchLatest(){
    try {
      const res = await axios.get('http://localhost:3001/latest');
      setUrl(res.data.url ? 'http://localhost:3001' + res.data.url : null);
    } catch(e){
      console.error(e);
    }
  }
  useEffect(()=> {
    fetchLatest();
    const id = setInterval(fetchLatest, 2000);
    return ()=> clearInterval(id);
  }, []);
  return (
    <div style={{fontFamily:'sans-serif', padding:20}}>
      <h1>Flamapp Dashboard</h1>
      <p>Latest processed frame:</p>
      {url ? <img src={url} alt="latest" style={{maxWidth:'80%'}} /> : <p>No images uploaded yet</p>}
    </div>
  )
}
