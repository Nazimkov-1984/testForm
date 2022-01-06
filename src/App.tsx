import React, {useCallback} from 'react';
import Button from "./component/Button/Button";
import ModalStore from "./store/modalStore";
import API from "./services/requestData";
import modalStore from "./store/modalStore";

const scss = require('./App.module.scss');


const App: React.FunctionComponent = () => {

    const openModalHandler = useCallback(()=> {
        ModalStore.toggleModal();
        API.getFormData();
        modalStore.resetSendButton();
    },[])

    return (
        <div className={scss.wrapper}>
            <Button buttonText={"Задать вопрос"} onClick={openModalHandler}/>
        </div>
    )
}

export default App;
