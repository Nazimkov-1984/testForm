import { IFormData } from "../store/modalStore";
const axios = require('axios');

 const sendFormData = (payload:IFormData)=> {
    axios.post("/api/form", payload)
}
export default sendFormData;