import React from "react";
import memesData from "..memesData.js";


export default function Meme() {
    //const [memeImage, setMemeImage] = React.useState("");
    const [meme, setMeme] = React.useState({
        topText: "Shut up",
        bottomText: "and take my money",
        randomImage: "https://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
                ...prevMeme,
                randomImage: url
            }))
        
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>  
            <div className="form">
                <label htmlFor="top-text">Top Text</label>
                <input 
                    id="top-text"
                    type="text"
                    placeholder="Shut up"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <label htmlFor="bottom-text">Bottom Text</label>
                <input
                    id="bottom-text" 
                    type="text"
                    placeholder="and take my money"
                    className="form--imput"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onclick={getMemeImage}
                >
                    Get a new meme image🖼️
                </button>
            </div>
            <div>
                <img scr={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}