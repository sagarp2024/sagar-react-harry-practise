import React,{useState} from 'react'


const Textform = (props) => {
  const handleUpclick=()=>{

    console.log("uppercase was clicked")
    setText("You have clicked on handleupclick")

  }
    const handleonChange = (event)=>{
      console.log("on change");
      setText(event.target.value)
    };
  

  const[text,setText] = useState('Enter text here2')
  //text="new Text" wrong way to change the state.
  //setText("new text"); correct way to change the state
  return (
    <>
    <div>
    <h1>{props.heading}</h1>

  <div className="mb-5">
  
  <textarea className="form-control" value={text} onChange={handleonChange} id="exampleFormControlTextarea1" rows="10" cols="10"  ></textarea>
  </div>
   <button className='btn btn-primary' onClick={handleUpclick}>convert to uppercase</button>
    </div> 

</>
  )
  
}

export default Textform
