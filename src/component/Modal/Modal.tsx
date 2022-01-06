import {useCallback} from "react";
import ModalStore from "../../store/modalStore";
import {observer} from "mobx-react-lite";
import Button from "../Button/Button";
import API from "../../services/requestData";
import ModalField from "../ModalField/ModalField";
import modalStore from "../../store/modalStore";
import SuccessMesagge from "../SuccessMesagge/SuccessMesagge";
import classNames from "classnames";

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
        API.getFormDataWithSuccess();
        modalStore.toggleDisabledButton("success")
    }, []);

    const onSendWithError = useCallback(() => {
        API.getFormDataWithError();
        modalStore.toggleDisabledButton("error");
    }, []);

    if (ModalStore.isOpenModal) {
        return (
            <div className={scss.modal} onClick={onOutsideClick}>
                <div className={classNames(scss.modalBody,{[scss.hasMessage]:ModalStore.getFormData.message})}>
                    <div className={scss.modalHeader}>
                        <i className={scss.close} onClick={closeModal}/>
                    </div>
                    {ModalStore.getFormData.message ? (
                        <SuccessMesagge text={ModalStore.getFormData.message}/>
                    ): (
                        <>
                        <div className={scss.modalBody}>
                            {ModalStore.getFormTypesFields.map(field => {
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