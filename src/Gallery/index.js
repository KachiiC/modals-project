import React,{useEffect, useState} from 'react'
// CSS
import './index.css'
// Components
import Pictures from '../Modals/PictureData'


function Gallery () {

    const [result, setResult] = useState([])

    useEffect(() => {
        setResult()
    })

    const displayPictures = Pictures.map((picture) => {

        const rename = () =>  setResult(picture.name) 

        return (
            <div className="gallery-item">
                <h1>{picture.name}</h1>
                <img src={picture.url} alt={picture.name} onClick={() => rename} id="myBtn"/>
            </div>
        )
    })

    return (
        <div className="gallery-row">
            {displayPictures}
            {result}
        </div>
    )
}

export default Gallery