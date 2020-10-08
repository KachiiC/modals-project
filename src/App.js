import React,{useState} from 'react';
// CSS
import './App.css';
import Modal from './Modals'
import Pictures from './Modals/PictureData'
// Components
import Gallery from './Gallery'

function App() {

  const [status, setStatus] = useState(false);
  const [result, setResult] = useState([])

  const displayPictures = Pictures.map((picture) => {

    const rename = () =>  setResult(picture) 
    const changeStatus = () => setStatus(true)

    return (
      <>
        <div className="gallery-item">
            <h1>{picture.name}</h1>
            <img src={picture.url} alt={picture.name} onClick={() => {changeStatus();rename()}} />
        </div>
      </>
        
    )
  })

  return (
      <>
        { status && (
          <Modal closeModal={() => setStatus(false)}>
            <h1>{result.name}</h1>
            <img src={result.url} alt={result.name} />
          </Modal>
        )}
          <div className="site-container">
            <div className="gallery-row">
              {displayPictures}
            </div>
          </div>

      </>
  );
}

export default App;
