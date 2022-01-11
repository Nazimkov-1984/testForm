interface IProps {
    placeholder: string;
    options?: Array<Record<string, string>>;
    name: string;
    value?: string;
    required: boolean;
    emptySelection?: boolean;
    onChange?:()=>void;
}

const scss = require('./Select.module.scss');

const Select = ({placeholder, options, name, value, emptySelection, onChange}: IProps) => {

    const keys: Array<string> = [];
    options?.forEach(item => {
        Object.keys(item).forEach(key => {
            keys.push(key);
        })
    })

    return (
        <div className={scss.selectWrapper}>
            <span className={scss.placeholder}>{`${placeholder}:`}</span>
            <svg className={scss.arrow} height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
                <path
                    d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
            </svg>
            <select name={name} className={scss.selectForQuestions} onChange={onChange}>
                {emptySelection && (
                    <option value={""} className={scss.emptyOption}>{""}</option>
                )}
                {options?.map((item, index) => {
                    return (
                        <option className={scss.option} selected={keys[index] === value} key={item[keys[index]]}
                                value={keys[index]}>{item[keys[index]]}</option>
                    )
                })}
            </select>
        </div>
    )
}
export default Select;