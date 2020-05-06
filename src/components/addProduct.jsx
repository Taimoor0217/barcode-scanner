import React, {useState} from 'react';
import { Segment , Button , Form} from 'semantic-ui-react'
import { useHistory } from "react-router-dom";
import api from '../utils/api';
export default function AddManually (){
    let history = useHistory();
    const [message , setMessage] = useState("Hello World")
    const [isSaving, setSaving] = useState(false);
    const [status , setStatus] = useState(false);
    const [ean , setEan] = useState("");
    const [catId , setCatId] = useState("");
    const [name , setName] = useState("");
    const [catname , setCatname] = useState("");

    function save(){
        // console.log(ean , catId , name, catname)
        api.addProduct({
            ean,
            catId,
            name,
            catname
        })
        .then(res=>{
            setMessage("Sucessfully Saved to Database")
            setStatus(true)
        })
        .catch(err=>{
            setMessage("Sucessfully Saved to Database")
            setStatus(true)
        })
        setMessage("Saving data to the database...")
        setEan("")
        setCatId("")
        setName("")
        setCatname("")
        setSaving(true)
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
                    }} inverted color= "yellow"> Add another</Button>

                    <Button onClick={()=>history.push('/scan')} inverted color = "green"> Scan</Button>
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
    return(
        <div className="holder">
            <Segment className ="hello">
            <Form>
                <Form.Field>
                <label>Ean</label>
                <input value = {ean} onChange={e=>setEan(e.target.value)} placeholder='ean' />
                </Form.Field>
                <Form.Field>
                <label>Name</label>
                <input value = {name} onChange={e=>setName(e.target.value)} required={true} placeholder='name' />
                </Form.Field>
                <Form.Field>
                <label>Category Id</label>
                <input value = {catId} onChange={e=>setCatId(e.target.value)} placeholder='category id' />
                </Form.Field>
                <Form.Field>
                <label>Category Name</label>
                <input value={catname} onChange={e=>setCatname(e.target.value)} required={true} placeholder='category name' />
                </Form.Field>
                <Button onClick={e=>{
                    e.preventDefault()
                    save()
                }} type='submit'>Submit</Button>
            </Form>
            </Segment>
        </div>
    )
}