import Label from "./Label";
import classNames from "classnames";
import MessageError from "./MessageError";

const scss = require("./Input.module.scss");

export enum InputTypes {
    EMAIL = "EMAIL",
    TEXT ="TEXT"
}

interface IProps {
    value?: string;
    type: InputTypes
    labelText: string;
    forInput: string;
    placeholderText?: string;
    isNotValid?: boolean;
    name:string;
    errorText?:string[];
    required:boolean;
    onChange?:()=>void;
}

const Input = ({value, type, labelText,forInput, placeholderText, isNotValid,name, errorText, onChange}:IProps) => {

    return (
        <div className={scss.inputContainer}>
            {labelText && (
                <Label text={labelText} for={forInput}/>
            )}
            <input
                name={name}
                defaultValue={value? value : ""}
                type={type === InputTypes.EMAIL ? "email" : "text"}
                className={classNames(scss.input, {[scss.inputNotValid]: isNotValid !== undefined && isNotValid})}
                placeholder={placeholderText ? placeholderText : ""}
                onChange={onChange}
            />
            {errorText && (
                <MessageError text={errorText[0]}/>
            )}
        </div>
    )
}
export default Input;