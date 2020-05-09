import React, { useState } from "react";
import Scanner from "./scanner";
import "../styles/styles.css";
import { Segment , Button } from 'semantic-ui-react'
import { useHistory } from "react-router-dom";
import Api from '../utils/api';
export default function Landing() {
  let history = useHistory();
  const [camera, setCamera] = useState(true);
  const [result, setResult] = useState(5707119032506);
  const [message , setMessage] = useState("Hello World")
  const [isSaving, setSaving] = useState(false);
  const [status , setStatus] = useState(false); //completed processing?
  const onDetected = result => {
    setResult(result);
  };
  
  function sendToken(){
    Api.sendToken(result)
    .then(res=>{
      // console.log(res.data)
      setMessage(`Sucessfully Saved to Database with values name: ${res.data.name} , category: ${res.data.ean}`)
      setStatus(true)
    })
    .catch(err=>{
      // console.log(err.message)
      if(err.response){
        setMessage(err.response.data)
      }else{
        setMessage("Something went wrong")
      }
      setStatus(true)
    })
    setSaving(true)
    setCamera(!camera)
    setMessage("Saving data to the database...")
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
                  setCamera(!camera)
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
  }
  return (
    <>
      <div className="container">
        {camera && <Scanner onDetected={onDetected} />}
      </div>
    <Segment >

      <h3> Scanned Code : <span style={{color:"green"}}> {result} </span></h3>      
      <Button inverted color= "blue" onClick={() => sendToken()}>
       Save
      </Button>
      <Button onClick={()=>history.push('/add')} inverted color = "yellow"> Add Manually</Button>
    </Segment>
    </>
  );
}
