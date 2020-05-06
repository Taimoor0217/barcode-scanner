import Axios from "axios";
class Ean {
    constructor(){
        this.url = 'http://localhost:5000/api/'
    }
    sendToken(code){
        return new Promise((resolve , reject)=>{
            Axios.post( `${this.url}/scan`,null, {
                params:{
                    code : code
                }
            })
            .then(res=>{
                resolve(res)
            })
            .catch(err=>{
                reject(err)
            })
        })
    }
    addProduct(product){
        return new Promise((resolve , reject)=>{
            Axios.post( `${this.url}/add` , product ,{
                headers:{
                    'content-type': 'text/json'
                }
            } )
            .then(res=>{
                resolve(res)
            })
            .catch(err=>{
                reject(err)
            })
        })
    }
}
export default new Ean();