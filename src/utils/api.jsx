import Axios from "axios";
class Ean {
    constructor(){
        this.url = 'http://localhost:5000/api/scan'
    }
    sendToken(code){
        return new Promise((resolve , reject)=>{
            Axios.post( this.url,null, {
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
}
export default new Ean();