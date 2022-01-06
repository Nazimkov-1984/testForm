interface IProps{
    placeholder:string;
    options?:Array<Record<string,string>>;
    name:string;
    value?: string;
}
const scss = require('./Select.module.scss');

const Select = ({placeholder, options, name, value}:IProps) => {

    const keys:Array<string> = [];
    options?.forEach(item => {
        Object.keys(item).forEach(key=>{
            keys.push(key);
        })
    })

    return (
        <div className={scss.selectWrapper}>
            <span className={scss.placeholder}>{`${placeholder}:`}</span>
        <select name = {name} className={scss.selectForQuestions}>
            {options?.map((item, index) => {
                return(
                    <option selected={keys[index] === value} key={item[keys[index]]} value={item[keys[index]]}>{item[keys[index]]}</option>
                )
            })}
        </select>
        </div>
    )
}
export default Select;