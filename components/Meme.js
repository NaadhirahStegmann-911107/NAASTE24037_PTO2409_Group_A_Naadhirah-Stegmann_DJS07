import React from "react";
import memesData from "..memesData.js";


export default function Meme() {
    const [memeImage, setMemeImage] = React.useState("");

    function getMemeImage() {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url);
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
                />
                <label htmlFor="bottom-text">Bottom Text</label>
                <input
                    id="bottom-text" 
                    type="text"
                    placeholder="and take my money"
                    className="form--imput"
                />
                <button 
                    className="form--button"
                    onclick={getMemeImage}
                >
                    Get a new meme image🖼️
                </button>
            </div>
            <img scr={memeImage} className="meme--image" />
        </main>
    )
}