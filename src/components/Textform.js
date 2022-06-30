import React, { useState } from 'react'

export default function Textform(props) {
    const handelupclick=()=>{
        // console.log("");
        let newtext=text.toUpperCase();
        setText(newtext);
    }
    const handellowclick=()=>{
        // console.log("");
        let newtext=text.toLowerCase();
        setText(newtext);
    }
    const handelreverseclick=()=>{
        let newtext=text.trim();
        setText(newtext); 
    }
    const handelclearclick=()=>{
        let newtext=" ";
        setText(newtext); 
    }
    const handelOnchange=(event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
        <h2>{props.heading}</h2>
        <div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
                <textarea className="form-control" value={text} onChange={handelOnchange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handelupclick}>Convert to toUpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handellowclick}>Convert to toLowercaseCase</button>
            <button className="btn btn-primary mx-1" onClick={handelreverseclick}>Trim text</button>
            <button className="btn btn-primary mx-1" onClick={handelclearclick}>Clear text</button>
        </div>
        <div>
            <div className="container my-3">
                <h1>Your text summary </h1>
                <p>{text.split(/\s+/).length} and {text.length} characters</p>
                <p>{0.008*text.split(" ").length}minutes read</p>
            </div>
        </div>
        </>
    )
}

