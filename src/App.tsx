import React, {useCallback,useEffect} from 'react';
import Button from "./component/Button/Button";
import ModalStore from "./store/modalStore";
import API from "./services/requestData";
import modalStore from "./store/modalStore";


const scss = require('./App.module.scss');



const App: React.FunctionComponent = () => {

useEffect(()=>{
    API.getFormData().then(res =>{
        if(res.status === 200) {
            modalStore.setFormData(res);
        }
    });
},[]);

    const openModalHandler = useCallback(()=> {
        ModalStore.toggleModal();
        modalStore.resetSendButton();
    },[])

    return (
        <div className={scss.wrapper}>
            <Button buttonText={"Задать вопрос"} onClick={openModalHandler}/>
        </div>
    )
}

export default App;
