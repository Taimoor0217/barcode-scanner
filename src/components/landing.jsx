import React from 'react';
import { Segment , Button } from 'semantic-ui-react'
import { useHistory } from "react-router-dom";
export default function Landing (){
    let history = useHistory();
    return(
        <div className="holder">
            <Segment className ="hello">
                <h1 >Hello Scanner !!</h1>
                <h5 >Please choose an option below</h5>
                <div className="button-button">
                    <Button onClick={()=>history.push('/add')} inverted color = "yellow"> Add Product</Button>
                    <Button onClick={()=>history.push('/scan')} inverted color= "green"> Scan Barcode</Button>
                </div>
            </Segment>
        </div>
    )
}