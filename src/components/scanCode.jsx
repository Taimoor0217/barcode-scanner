import React, { useState } from "react";
import Scanner from "./scanner";
import "../styles/styles.css";
import { Segment , Button } from 'semantic-ui-react'
import { useHistory } from "react-router-dom";


export default function Landing() {
  let history = useHistory();
  const [camera, setCamera] = useState(true);
  const [result, setResult] = useState(null);
  const [message , setMessage] = useState("")
  const [isSaving, setSaving] = useState(false);
  const [status , setStatus] = useState(true);
  let res = true;
  const onDetected = result => {
    setResult(result);
  };
  
  function ToggleCamera(){
    setCamera(!camera)
  }

  function save(){
    ToggleCamera()
    setMessage("Saving data to the database...")
    // SEND API CALLL
    //.THEN
    if(res){
      setMessage("Product saved successfully database...")
    }

  }
  if(isSaving){
    return(
    <h2> {message}</h2>
    )
  }
  return (
    <>
    <Segment >
      <div className="container">
        {camera && <Scanner onDetected={onDetected} />}
      </div>

      <h3> Scanned Code : <span style={{color:"green"}}> {result} </span></h3>      
      <Button inverted color= "blue" onClick={() => save()}>
       Save
      </Button>
      <Button onClick={()=>history.push('/add')} inverted color = "yellow"> Add Manually</Button>

    </Segment>
    </>
  );
}
