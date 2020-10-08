import React,{useState} from 'react';
// CSS
import './App.css';
// Components
import Modal from './Modals/modal'
import Pictures from './Modals/PictureData'

function App() {

  const [showModal, setShowModal] = useState(false);
  const [result, setResult] = useState([])

  const displayPictures = Pictures.map((picture) => {

    const rename = () =>  setResult(picture) 
    const changeVisibility = () => setShowModal(true)

    return (
      <>
        <div className="gallery-item">
            <h1>{picture.name}</h1>
            <img src={picture.url} alt={picture.name} onClick={() => {changeVisibility();rename()}} />
        </div>
      </>
        
    )
  })

  return (
      <>
        { showModal && (
          <Modal closeModal={() => setShowModal(false)}>
            <div className="modal-content">
              <h2>{result.name}</h2>
              <img src={result.url} alt={result.name} />
            </div>
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
