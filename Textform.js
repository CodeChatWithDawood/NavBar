import { useState } from "react";


export default function Textform(props) {
      
    //  settext("text here")
  const[text, settext] =useState("");

    const handleupclick =()=>{
  let newtext=text.toUpperCase();
  settext(newtext)
  props.showalerts("Success","converted to uppercase")
   }

   const handleupclicka =()=>{
  console.log(text);
  let newtext=text.toLowerCase();
  settext(newtext)
   props.showalerts("Success","converted to lowercase")
   }
     
   const handleonchange=(event)=>{
    settext(event.target.value)
   }

   const handleExtraspaces=()=>{
    let newtext=text.split(/[  ]+/)
    settext(newtext.join(" "))
   }
   const cleartext=()=>{
       settext("")
        
   }
   
   
  return (
    <>
     <div className="container" style={{color:props.mode==='light' ? 'black':'white'}}>
   
    <h1>{props.heading}</h1>
    <div className="container mb-3 d-flex flex-wrap gap-2" >
  <textarea className="form-control " style={{backgroundColor:props.mode==='light' ? 'white':'grey',color:props.mode==='light' ? 'black':'white'}} value={text} onChange={handleonchange} id="exampleforHTMLmControlTextarea1" rows="8" cols="100" ></textarea>
  <div><button className="btn btn-primary my-2" onClick={handleupclick} > Convert to Upper case</button></div>
  <div><button className="btn btn-primary my-2" onClick={handleupclicka} > Convert to Lower case</button></div>
  <div><button className="btn btn-primary my-2" onClick={handleExtraspaces} > Remove Extra spaces</button></div>
  <div><button className="btn btn-primary my-2" onClick={cleartext} > Clear Text</button></div>
</div>
</div>
<div className="container my-3" style={{color:props.mode==='light' ? 'black':'white'}}>
<h1>Text Summary</h1>
<p>{text.trim().split(/\s+/).length} words and {text.length} characters</p>
<p>{0.008 * text.split("").length} Minutes read</p>
<h2>Preview Text</h2>
<p>{text}</p>
</div>
 </>
  );
}
