import classNames from "classnames";
import Label from "../Input/Label";
import MessageError from "../Input/MessageError";

const scss = require("../Input/Input.module.scss");


interface IProps {
    value?: string;
    labelText: string;
    forInput: string;
    placeholderText?: string;
    isNotValid?: boolean;
    name:string;
    errorText?:string[];
    onChange?:()=>void;

}

const TextArea = ({value, labelText, forInput, placeholderText, name, isNotValid, errorText, onChange}: IProps) => {

    return (
        <div className={scss.inputContainer}>
            {labelText && (
                <Label text={labelText} for={forInput}/>
            )}
            <textarea
                name = {name}
                defaultValue={value ? value : ""}
                className={classNames(scss.input, scss.textArea,{[scss.inputNotValid]: isNotValid !== undefined && isNotValid})}
                placeholder={placeholderText ? placeholderText : ""}
                onChange={onChange}
            />
            {errorText && (
                <MessageError text={errorText[0]}/>
            )}
        </div>
    )
}
export default TextArea;