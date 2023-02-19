import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [gpxFileAsText, setGpxFileAsText] = useState(null)

  const handleFile = async (e) => {
    const uploadedGpx = fileReaderFile(e.target.files[0])
    setGpxFileAsText(uploadedGpx)
  }

  return (
      <div className="App">
          <div className="welocme-container">
              <h1 className="welcome-message">Welcome to Map Activity</h1>
              <p>To begin click the button below to upload a gpx file</p>
              <input
                  type="file"
                  accept=".gpx, .xml"
                  datatype="xml"
                  onChange={handleFile}
              />
          </div>
      </div>
  );
}

export default App
