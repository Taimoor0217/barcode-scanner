import Axios from "axios";
class Ean {
  constructor() {
    this.url = "https://scancbarcode.herokuapp.com/api";
  }
  sendToken(code) {
    return new Promise((resolve, reject) => {
      Axios.post(`${this.url}/scan`, null, {
        params: {
          code: code,
        },
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          console.log(err.message);
          reject(err);
        });
    });
  }
  addProduct(product) {
    return new Promise((resolve, reject) => {
      Axios.post(`${this.url}/add`, product, {
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
export default new Ean();
