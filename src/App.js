import './App.css';
import QRCode from "react-qr-code";
import { useState } from 'react';
import qrcode from 'qrcode'
function App() {
  let [name, setname] = useState('')
  let [val, setval] = useState(true)
  let [url,seturl]=useState('')
  function op(){
    setval(false)
    qrcode.toDataURL(name)
    .then(url => {
      seturl(url)
    })
    .catch(err => {
      console.error(err)
    })
  }

  return (
    <div id='main'>
      <div id='qr'>
       
        {val === true ? <>
          <h1>QR code name</h1>
          <input onChange={(e) => { setname(e.target.value) }}></input>
          <br></br>
          <button onClick={op}>Genrate your code</button>
        </> :
          <> <h1>Scan thies from you Scanner</h1>
            <img src={url}></img>
            <br></br>
            <a href={url} download='qrcode.jpg'>Download</a>
          </>
        }
      </div>
    </div>
  )
}

export default App;
