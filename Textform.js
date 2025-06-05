import { useState } from "react";


export default function Textform(props) {
      
    //  settext("text here")
    const handleupclick =()=>{
  console.log(text);
  let newtext=text.toUpperCase();
  settext(newtext)
   }
     
   const handleonchange=(event)=>{
    console.log("text on change press");
    settext(event.target.value)
   }
   const[text, settext] =useState("");
   
  return (
    <>
     <div className="container">
   
    <h1>{props.heading}</h1>
    <div className="mb-3">
  <textarea className="forHTMLm-control" value={text} onChange={handleonchange} id="exampleforHTMLmControlTextarea1" rows="8" cols="100"></textarea>
  <div><button className="btn btn-primary" onClick={handleupclick} > Convert to Upper case</button></div><br />
  
</div>
</div>
<div className="container my-3" >
<h1>Text Summary</h1>
<p>{text.trim().split(/\s+/).length} words and {text.length} characters</p>
<p>{0.008 * text.split("").length} Minutes read</p>
<h2>Preview Text</h2>
<p>{text}</p>
</div>
 </>
  );
}
