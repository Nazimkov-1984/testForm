
class API {
    static getFormData =(fileUrl:string = "/backend/customer-message-form.json") =>  {
      return  fetch(fileUrl).then(response => {
           if(response.ok) {
              return  response.clone().json();
           }
        })
    }
    static getFormDataWithSuccess = (fileUrl:string = "/backend/customer-message-success.json") => {
        return  fetch(fileUrl).then(response => {
            if(response.ok) {
                return  response.clone().json();
            }
        })
    }
    static getFormDataWithError = (fileUrl:string = "/backend/customer-message-error.json") => {
        return  fetch(fileUrl).then(response => {
            if(response.ok) {
                return  response.clone().json();
            }
        })
    }

}
export default API;