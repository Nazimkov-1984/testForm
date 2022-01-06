import {fetchCustomerMessageError, fetchCustomerMessageSuccess, fetchFormData} from "../repository/api";
import modalStore from "../store/modalStore";

class API {
    static getFormData = ()=> {
        fetchFormData().then(response => {
            if(response.status === 200) {
              modalStore.setFormData(response);
            } else {
                throw new Error("Empty data");
            }
        })
            .catch(function (error) {
                console.log(error);
            });
    };
    static getFormDataWithError = () => {
        fetchCustomerMessageError().then(response => {
            if(response.status === 400) {
                modalStore.setFormDataWithError(response);
            } else {
                throw new Error("Empty data");
            }
        })
            .catch(function (error) {
                console.log(error);
            });
    }
    static getFormDataWithSuccess = () => {
        fetchCustomerMessageSuccess().then(response => {
            if(response.status === 200) {
                modalStore.setFormDataWithSuccess(response);
            } else {
                throw new Error("Empty data");
            }
        })
            .catch(function (error) {
                console.log(error);
            });
    }
}
export default API;