import React,{useState} from 'react';

export default function Darkmode() {
    const[myStyle,setMyStyle]= useState({
        color: 'white',
        backgroundColor:'black',
        padding:'20px',
        borderRadius:'4px',
        
    })
const [btntext,setbtntext]=useState("Enable light Mode")
   const changeUtility=()=>{
        if (myStyle.color==='white'){
            setMyStyle({
                 color: 'black',
                 backgroundColor:'white',
                 padding:'20px',
                 borderRadius:'4px',
        
            })
            setbtntext("Enable Dark Mode")
        }
        else{
            setMyStyle({
                color: 'white',
        backgroundColor:'black',
        padding:'20px',
        borderRadius:'4px',
            })
            setbtntext("Enable Light Mode")
        }

    }
     
  return (
    
    <div className='container' >
    <div className="container" > <h2 className='my-2' style={myStyle}>About US</h2></div>
   
      <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle} >
      <b>My First Project</b> 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        I'm a <strong>future DevOps engineer</strong> building innovative solutions from the ground up.
        This is my first React app — a stepping stone toward cloud-native excellence.
        I believe in automation, scalability, and seamless user experiences.
        Every line of code here reflects my growth and commitment to modern tech.
        The journey has just begun — and the future is DevOps-driven.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
<div className="container"><button onClick={changeUtility}  type="button" className="btn btn-primary my-3" style={myStyle} >{btntext}</button></div>

    </div>
  );
}
