import Input, {InputTypes} from "../Input/Input";
import Select from "../Select/Select";
// import {useCallback} from "react";
// import ModalStore from "../../store/modalStore";
import TextArea from "../TextArea/TextArea";




interface IProps {
    field: {
        attrs: {
            required: boolean;
            placeholder: string;
        };
        label: string;
        name: string;
        type: string;
        options?: Array<Record<string, string>>;
        errors?: Array<string>;
        value?: string;
    }
}

const ModalField = ({field}: IProps) => {

    // функция для сохранения данных формы в  store;
    // const onChangeFormData = useCallback((index:number, value:string)=>{
    //     let currentFormData = ModalStore.getFormData;
    //     currentFormData.form[index].value = value;
    //     ModalStore.setFormData(currentFormData);
    // },[])

    switch (field.type) {
        case ("text"): {
            return (
                <Input labelText={field.label}
                       name={field.name}
                       type={InputTypes.TEXT}
                       value={field.value}
                       forInput={field.name}
                       placeholderText={field.attrs.placeholder}
                       isNotValid={!!field.errors}
                       errorText={field.errors}
                       required={field.attrs.required}
                />
            )
        }

        case("email"): {
            return (
                <Input labelText={field.label}
                       name={field.name}
                       type={InputTypes.EMAIL}
                       value={field.value}
                       forInput={field.name}
                       placeholderText={field.attrs.placeholder}
                       isNotValid={!!field.errors}
                       errorText={field.errors}
                       required={field.attrs.required}
                />
            )
        }

        case("select"): {
            return (
                <Select value = {field.value}
                        name={field.name}
                        options={field.options}
                        placeholder={field.attrs?.placeholder}
                        required={field.attrs?.required}
                        emptySelection = {true}
                />
            )
        }

        case("textarea"): {
            return (
                <TextArea placeholderText={field.attrs?.placeholder}
                          value={field.value}
                          labelText={field.label}
                          forInput={"textarea"}
                          name={field.name}
                          isNotValid={!!field.errors}
                          errorText={field.errors}
                />
            )
        }
        default :
            return null;
    }
}
export default ModalField;