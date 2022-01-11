import { observable, makeAutoObservable, action, computed } from "mobx";

export interface FormField {
    attrs:{
        required:boolean;
        placeholder:string;
    };
    label:string;
    name:string;
    type:string;
    options?:Array<Record<string,string>>;
    errors?:Array<string>;
    value?:string;

}
export interface IFormData {
    status:number;
    form:Array<FormField>
    message?:string;
}


class ModalStore {
    public _isOpenModal: boolean = false;
    public _formDataModal:IFormData  = {} as IFormData ;
    public isDisabledButtonSendWithError:boolean = false;
    public isDisabledButtonSendWithSuccess:boolean = false;


    constructor() {
        makeAutoObservable(this, {
            _isOpenModal: observable,
            _formDataModal:observable,
            isDisabledButtonSendWithError:observable,
            isDisabledButtonSendWithSuccess:observable,
            toggleModal: action,
            setFormData:action,
            setFormDataWithError:action,
            setFormDataWithSuccess:action,
            toggleDisabledButton:action,
            resetSendButton:action,
            isOpenModal: computed,
            getFormTypesFields:computed,
        });
    }

    get isOpenModal() {
        return this._isOpenModal;
    }

    toggleModal = () => {
        this._isOpenModal = !this._isOpenModal;
    };
    toggleDisabledButton = (type:string) => {
        type === "error" ? this.isDisabledButtonSendWithError = !this.isDisabledButtonSendWithError: this.isDisabledButtonSendWithSuccess = !this.isDisabledButtonSendWithSuccess;
    }

    setFormData = (data:IFormData) => {
        this._formDataModal = data;
    }
    setFormDataWithError = (data:IFormData) => {
        this._formDataModal = data;
    }
    setFormDataWithSuccess = (data:IFormData) => {
        this._formDataModal = data;
    }

    resetSendButton = () => {
        this.isDisabledButtonSendWithSuccess = false;
        this.isDisabledButtonSendWithError = false;
    }
    get getFormData() {
        return this._formDataModal;
    }

    get getFormTypesFields() {
        const types:Array<FormField> = [];
        this._formDataModal.form.forEach(field=>{
            types.push(field);
        })
        return types;
    }

    get getIsDisabledButtonError() {
        return this.isDisabledButtonSendWithError
    }
    get getIsDisabledButtonSuccess() {
        return this.isDisabledButtonSendWithSuccess
    }

}

export default new ModalStore();