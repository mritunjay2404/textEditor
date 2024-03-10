import React, { useState } from 'react';
// import Alert from './Alert';

function TextForm(props) {
    console.log(props)

const cvrtUpCase = ()=>{
  console.log("Uppercase button clicked"+ text);
  setText(text.toUpperCase());
  // console.log(props.showAlert);
  props.showAlert("Converted to Uppercase","success");
}
const inputChngfunc = (event)=>{
    console.log("Input onchngfunc called");
    setText(event.target.value);
}
const cnvrtLoCase = ()=>{
    console.log("Lower case button clicked");
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowerecase","success");
};

const[text,setText] = useState(" ");
  return (
    <>
    <form className='container' style={{color:props.mode ==='light'? 'dark':'white'}}>
        <div className="form-group my-3">
            <h1 className=''>{props.heading}</h1>
            <textarea className={`form-control text-${props.mode === 'light'?'dark':'white'}`} value={text} onChange={inputChngfunc} id="mybox" rows="6"  style={{backgroundColor:props.mode ==='light'? 'white':'grey'}}></textarea>
        </div>
    </form> 
    <button disabled={text===0} type='button' className='btn btn-primary' onClick={cvrtUpCase}>Convert to UpperCase</button>
    <button disabled={text===0} type='button' className='btn btn-primary mx-2' onClick={cnvrtLoCase}>Convert to LowerCase</button>
    <div className='container my-3' style={{color:props.mode ==='light'? 'black':'white'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((element)=>{ return element!==0?element:''}).length} words {text.length} characters</p>
        <p>Time Taken to Read: {0.008*text.split(" ").filter((element)=>{ return element!==0?element:''}).length} Mintutes</p>

        <h3>Summary</h3>
        <p>{text.length>0?text:"Enter something in textArea to Preview..."}</p>
    </div>
    </>
  )
}

export default TextForm