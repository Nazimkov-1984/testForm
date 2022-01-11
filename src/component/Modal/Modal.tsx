import {useCallback} from "react";
import ModalStore, { IFormData } from "../../store/modalStore";
import {observer} from "mobx-react-lite";
import Button from "../Button/Button";
import ModalField from "../ModalField/ModalField";
import modalStore from "../../store/modalStore";
import SuccessMesagge from "../SuccessMesagge/SuccessMesagge";
import classNames from "classnames";
import API from "../../services/requestData";
import sendFormData from"../../services/sendFormData";
interface IProps {
    textHeader?: string
}

const scss = require('./Modal.module.scss');

const Modal = observer(({textHeader}: IProps) => {

    const closeModal = useCallback(() => {
        ModalStore.toggleModal();
    }, [])

    const onOutsideClick = useCallback((e) => {
        if (e.target.className === scss.modal) {
            ModalStore.toggleModal();
        }
    }, []);

    const onSendWithSuccess = useCallback(() => {
        API.getFormDataWithSuccess().then(res=> {
            if(res.status === 200) {
                modalStore.setFormData(res);
            }
        })
        modalStore.toggleDisabledButton("success")
    }, []);

    const onSendWithError = useCallback(() => {
        API.getFormDataWithError().then(res=> {
            if(res.status === 400) {
                console.log(res);
                modalStore.setFormData(res);
            }
        })
        modalStore.toggleDisabledButton("error");
    }, []);

    // отправка данных формы на сервер
    // const onSendForm= useCallback(()=> {
    //     const payload:IFormData = ModalStore.getFormData;
    //     sendFormData(payload);
    // },[]);

    if (ModalStore.isOpenModal) {
        return (
            <div className={scss.modal} onClick={onOutsideClick}>
                <div className={classNames(scss.modalBody,{[scss.hasMessage]:modalStore.getFormData.message})}>
                    <div className={scss.modalHeader}>
                        <i className={scss.close} onClick={closeModal}/>
                    </div>
                    {modalStore.getFormData.message? (
                        <SuccessMesagge text={modalStore.getFormData.message}/>
                    ): (
                        <>
                        <div className={scss.modalBody}>
                            {ModalStore.getFormTypesFields.map((field:any) => {
                                return (
                                    <ModalField field={field} key={field.name}/>
                                )
                            })}
                        </div>
                        <div className={scss.buttonWrapper}>
                        <Button inModal={true} buttonText={"Отправить с ошибкой"} onClick={onSendWithError}
                        disabled={modalStore.getIsDisabledButtonError}/>
                        <Button inModal={true} buttonText={"Отправить с успехом"} onClick={onSendWithSuccess}
                        disabled={modalStore.getIsDisabledButtonSuccess}/>
                        </div>
                        </>
                    )}


                </div>
            </div>
        )
    } else return null;

});
export default Modal;