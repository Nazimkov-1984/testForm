import Input, {InputTypes} from "../Input/Input";
import Select from "../Select/Select";
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
                />
            )
        }

        case("select"): {
            return (
                <Select value = {field.value} name={field.name} options={field.options} placeholder={field.attrs.placeholder}/>
            )
        }

        case("textarea"): {
            return (
                <TextArea placeholderText={field.attrs.placeholder}
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