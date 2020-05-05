import React, { useState } from "react";
import Scanner from "./scanner";
import "../styles/styles.css";
import { Segment , Button } from 'semantic-ui-react'
import { useHistory } from "react-router-dom";


export default function Landing() {
  let history = useHistory();
  const [camera, setCamera] = useState(true);
  const [result, setResult] = useState(null);
  const [message , setMessage] = useState("Hello World")
  const [isSaving, setSaving] = useState(false);
  const [status , setStatus] = useState(false); //completed processing?
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
    // setStatus(true) //after api returns something
    // setMessage("Saved Successfully") //set the messgae to the response message

  }
  if(isSaving){

    if (status){
      return(
        <Segment>
          <h2> {message}</h2>
            <div className="button-button">
                <Button onClick={()=>{
                  // history.push('/scan')
                  setSaving(false)
                  setStatus(false)
                  setMessage("")
                }} inverted color= "green"> Scan Another</Button>
                <Button onClick={()=>history.push('/add')} inverted color = "yellow"> Add Product</Button>
            </div>
          </Segment>
      )
    }else{
      return(
        <Segment>
          <h2>  {message} </h2>
        </Segment>
      )
    }
    // set status to false 
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
