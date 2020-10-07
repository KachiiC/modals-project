import React from 'react'
// CSS
import './index.css'
// Components
import Pictures from './PictureData'


function Gallery () {

    const displayPictures = Pictures.map((picture) => {
        return (
            <div className="gallery-item">
                <h1>{picture.name}</h1>
                <img src={picture.url} />
            </div>
        )
    })

    return (
        <div className="gallery-row">
            {displayPictures}
        </div>
    )
}

export default Gallery