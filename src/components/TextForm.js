import React, {useState} from 'react'

export default function TextForm({heading, mode, showAlert}) {

    const [text,setText]=useState("");
    const handleUpClick=()=>{
        setText(text.toUpperCase());
    }
    const handleLoClick=()=>{
        setText(text.toLowerCase());
    }
    const clearText=()=>{
        setText("");
    }
    const copyText=()=>{
        navigator.clipboard.writeText(text);
        showAlert("info",'Text copied');
    }

    const removeExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }

    return (
        <>
        <div className='container'style={{color:mode==='light'?'black':'white'}}>
            <h1>{heading}</h1>
            <div className="mb-3"> 
                <textarea className="form-control" id="myText" rows="8" value={text} onChange={(e)=>{setText(e.target.value);
                }}
                style={{backgroundColor:mode==='light'?'white':'grey',color:mode==='light'?'black':'white'}}/>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-1" onClick={clearText}>Clear</button>
            <button className="btn btn-primary mx-1" onClick={copyText}>Copy</button>
            <button className="btn btn-primary mx-1" onClick={speak}>Read</button>
            <button className="btn btn-primary mx-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-2" style={{color:mode==='light'?'black':'white'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words {text.length} characters</p>
            <p>Read time: {0.008*text.split(" ").length} minutes</p>
            <h2>Preview:</h2>
            <p>{text.length>0?text:'Enter some text to preview it here.'}</p>
        </div>
        </>
    )
}
