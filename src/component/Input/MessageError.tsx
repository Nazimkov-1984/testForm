interface IProps {
    text: string;
}
const scss = require("./MessageError.module.scss")
const MessageError = ({text}:IProps) => {
    return (
        <span className={scss.text}>{text}</span>
    )
}
export default MessageError;