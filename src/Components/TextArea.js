import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
const TextArea = (props)=>{
  const [text, setText] = useState("")
  const [textcolor,setTextColor] = useState("black");
  const [textFont, setTextFont] = useState("35px")
  
  function handleReset(){
    setText('');
    props.showAlertText("Reset clicked");
  }
  function textColor(colorValue){
    setTextColor(colorValue);    
  }
  function convertToLower(){    
    setText(String(text).toLowerCase());
    props.showAlertText("Converted to Lower Case");
  }
  function convertToUpper(){    
    setText(String(text).toUpperCase());
    props.showAlertText("Converted to Upper Case");
  }  
  function removeExtraSpace(){    
    setText(String(text).replace(/\s+/g,' ').trim());
    props.showAlertText("Removed Extra Spaces");
  } 
  function textCapitalize(texT){        
    return (String(texT).charAt(0).toUpperCase()+
    String(texT).slice(1))    
  }
  function setTextCapitalize(){    
    setText(
        textCapitalize(text)
      );
      props.showAlertText("Text Capitalized");
  }
  function capitalizeWords(){    
    let arr = String(text).trim().split(' ');
    console.log(String(arr))
    arr.forEach((element,index) => {
      arr[index] = textCapitalize(element)
    });
    setText(arr.join(' ')) 
    props.showAlertText("Words Capitalized");   
  }
  function removeSpecialChars(){
    setText(text.replace(/[^a-zA-Z0-9 ]/g, ""));
    props.showAlertText("Removed Special Characters");
  }
  function copyText(){
      async function clipboardCopy() {
        navigator.clipboard.writeText(text);        
    }
    return clipboardCopy();
    props.showAlertText("Text Copied");
  }
  function checkSlider(e){
    let currentValue = e.target.value;
    let fontSize = Math.floor((3*currentValue/10)+20);
    setTextFont(fontSize);

  }



  return(
    <>
      <div className={`container mb-3 my-4 text-${props.mode==='dark'?'white':'dark'}`}>
        <label htmlFor="exampleFormControlTextarea1" className="form-label my-5">
          <h1>Please Enter Your Text Below:- </h1>
        </label>
        
        <textarea className="form-control" id="exampleFormControlTextarea1" style={{color: textcolor, 'fontSize':textFont, 'min-height': '450px'}} placeholder='Enter your text' value={text} onChange={e => setText(e.target.value)}></textarea>
          <div className="mb-6 row my-2">
            <label htmlFor="inputPassword" className="col-sm-3 col-form-label"><h4>Select Text Color</h4></label>
            <div className="col-sm-2 my-1">
            <Form.Control
              type="color"
              id="exampleColorInput"
              defaultValue="#563d7c"
              title="Choose your color"
              onChange ={ e=>setTextColor(e.currentTarget.value) }
            />
            </div>
          </div>
          
          
          <p>------------------------------------------</p>
      
        <button type="button" className="btn btn-info mx-2 my-2" onClick={handleReset}>Reset Text</button>
        <button type="button" className="btn btn-primary mx-2 my-2" onClick = {convertToUpper}>Convert to UpperCase</button>
        <button type="button" className="btn btn-secondary mx-2 my-2" onClick={convertToLower}>Covert to LowerCase</button>
        <button type="button" className="btn btn-success mx-2 my-2" onClick={removeExtraSpace}>Remove extra spaces</button>
        <button type="button" className="btn btn-danger mx-2 my-2" onClick={removeSpecialChars}>Remove Special Characters</button>
        <button type="button" name='copy' className="btn btn-warning mx-2 my-2" onClick={copyText}>Copy</button>
        <button type="button" className="btn btn-light mx-2 my-2" onClick={setTextCapitalize}>Capitalize</button>
        <button type="button" className="btn btn-dark mx-2 my-2" onClick={capitalizeWords}>Capitalize Words</button>


        <div style={
            {
            margin:'10px 35%',
            justifyContent: 'center',
            alignItems: 'center'
            }}>          
          <input type="range" class="form-range" style={
            {
            justifyContent: 'center',
            backgroundColor: 'orange',
            borderRadius: '50%'
            }} id="customRange1" min="0" max="100" step="1" onChange={checkSlider}/>

            <label for="exampleFormControlInput1" class="form-label" style={
            {
            margin:'10px 35%', 
            justifyContent: 'center',
            alignItems: 'center'
            
            }}><h6>Set Font Size</h6></label>
        </div>
      </div>
      </>


    );
}

export default TextArea;