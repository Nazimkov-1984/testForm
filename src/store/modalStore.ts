import { observable, makeAutoObservable, action, computed } from "mobx";
import {FormField, IFormData} from "../repository/api";


class ModalStore {
    public _isOpenModal: boolean = false;
    public _formDataModal:IFormData =   {
        "status": 200,
        "form": [
            {
                "attrs": {
                    "required": true,
                    "placeholder": "Введите Ваше ФИО"
                },
                "label": "ФИО",
                "name": "first_name",
                "type": "text",
            },
            {
                "attrs": {
                    "required": true,
                    "placeholder": "Введите Ваш e-mail"
                },
                "label": "E-mail",
                "name": "email",
                "type": "email",
            },
            {
                "attrs": {
                    "required": true,
                    "placeholder": "Выберите тип вопроса"
                },
                "label": "Тип вопроса",
                "name": "type",
                "type": "select",
                "options": [
                    {"order": "Вопрос по заказу"},
                    {"return": "Вопрос по возврату"},
                    {"cooperation": "Вопрос по сотрудничеству"}
                ]
            },
            {
                "attrs": {
                    "required": true,
                    "placeholder": "Ваше сообщение нам"
                },
                "label": "Сообщение",
                "name": "message",
                "type": "textarea",
            }
        ]
    };
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