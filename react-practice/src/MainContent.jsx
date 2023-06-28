import React from 'react'
import './MainContent.css'
import memesData from './memesData'

export default function MainContent(){

    const [memeImg, setMemeImg] = React.useState("")

    function newImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMemeImg(url)
        console.log(url)
    }

    return(
        <div className="main">
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={newImage}
                >
                    Get a new meme image 🖼
                </button>

                <img 
                    src={memeImg} 
                    alt="Meme Image"
                    className="meme--image"
                />
            </div>
        </div>
    )
}