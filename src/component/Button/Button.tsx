import classNames from "classnames";

interface IProps {
    disabled?: boolean;
    buttonText: string;
    inModal?: boolean;
    onClick?: () => void;
}

const scss = require("./Button.module.scss");


const Button = ({buttonText, inModal, onClick, disabled}: IProps) => {

    return (
        <button type={"submit"} disabled={disabled}
                className={classNames(scss.buttonAskQuestion, {[scss.noShadow]: inModal}, {[scss.disabled]: disabled})}
                onClick={onClick}>{buttonText}</button>
    )
}
export default Button;