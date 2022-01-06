import icon from "../../assets/img/check.png"
import Button from "../Button/Button";
import {useCallback} from "react";
import ModalStore from "../../store/modalStore";
interface IProps {
    text: string;
}
const scss = require("./SuccesMessage.module.scss");

const SuccessMessage = ({text}:IProps) => {
    const onClickHandler = useCallback(()=> {
        ModalStore.toggleModal();
    },[])

    return (
        <div className={scss.messageContainer}>
            <img className={scss.icon} src={icon} alt={"icon success"}/>
            <span className={scss.text}>{text}</span>
            <Button inModal = {true} buttonText={"Закрыть"} onClick={onClickHandler} disabled={false} />
        </div>
    )
}
export default SuccessMessage;