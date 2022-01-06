export interface FormField {
    attrs:{
        required:boolean;
        placeholder:string;
    };
    label:string;
    name:string;
    type:string;
    options?:Array<Record<string,string>>;
    errors?:Array<string>;
    value?:string;

}
export interface IFormData {
    status:number;
    form:Array<{
        attrs:{
            required:boolean;
            placeholder:string;
        };
        label:string;
        name:string;
        type:string;
        options?:Array<Record<string,string>>;
        errors?:Array<string>;
        value?:string;
    }>
    message?:string;
}

export const fetchFormData = ():Promise<IFormData> => {
    return new Promise((resolve) => {
        resolve(
            {
                "status": 200,
                "form": [
                    {
                        "attrs": {
                            "required": true,
                            "placeholder": "Введите Ваше ФИО"
                        },
                        "label": "ФИО",
                        "name": "first_name",
                        "type": "text",
                    },
                    {
                        "attrs": {
                            "required": true,
                            "placeholder": "Введите Ваш e-mail"
                        },
                        "label": "E-mail",
                        "name": "email",
                        "type": "email",
                    },
                    {
                        "attrs": {
                            "required": true,
                            "placeholder": "Выберите тип вопроса"
                        },
                        "label": "Тип вопроса",
                        "name": "type",
                        "type": "select",
                        "options": [
                            {"order": "Вопрос по заказу"},
                            {"return": "Вопрос по возврату"},
                            {"cooperation": "Вопрос по сотрудничеству"}
                        ]
                    },
                    {
                        "attrs": {
                            "required": true,
                            "placeholder": "Ваше сообщение нам"
                        },
                        "label": "Сообщение",
                        "name": "message",
                        "type": "textarea",
                    }
                ]
            }
        );
    });
};

export const fetchCustomerMessageSuccess = ():Promise<IFormData> => {
    return new Promise((resolve) => {
        resolve({
            "status": 200,
            "form": [
                {
                    "attrs": {
                        "required": true,
                        "placeholder": "Введите Ваше ФИО"
                    },
                    "label": "ФИО",
                    "name": "first_name",
                    "type": "text",
                },
                {
                    "attrs": {
                        "required": true,
                        "placeholder": "Введите Ваш e-mail"
                    },
                    "label": "E-mail",
                    "name": "email",
                    "type": "email",
                },
                {
                    "attrs": {
                        "required": true,
                        "placeholder": "Выберите тип вопроса"
                    },
                    "label": "Тип вопроса",
                    "name": "type",
                    "type": "select",
                    "options": [
                        {"order": "Вопрос по заказу"},
                        {"return": "Вопрос по возврату"},
                        {"cooperation": "Вопрос по сотрудничеству"}
                    ]
                },
                {

                    "attrs": {
                        "required": true,
                        "placeholder": "Ваше сообщение нам"
                    },
                    "label": "Сообщение",
                    "name": "message",
                    "type": "textarea",
                }
            ],
            "message": "Ваше сообщение принято, мы свяжемся с Вами в ближайшее время."
        })
    })
}

export const fetchCustomerMessageError = ():Promise<IFormData> => {
    return new Promise((resolve) => {
        resolve({
            "status": 400,
            "form": [
                {
                    "attrs": {
                        "required": true,
                        "placeholder": "Введите Ваше ФИО"
                    },
                    "label": "ФИО",
                    "name": "first_name",
                    "type": "text",
                    "errors": [
                        "Поле обязательное к заполнению"
                    ]
                },
                {
                    "attrs": {
                        "required": true,
                        "placeholder": "Введите Ваш e-mail"
                    },
                    "label": "E-mail",
                    "name": "email",
                    "type": "email",
                    "errors": [
                        "Введите корректный e-mail."
                    ],
                    "value": "test@test@test@test.test"
                },
                {
                    "attrs": {
                        "required": true,
                        "placeholder": "Выберите тип вопроса"
                    },
                    "label": "Тип вопроса",
                    "name": "type",
                    "type": "select",
                    "options": [
                        {"order": "Вопрос по заказу"},
                        {"return": "Вопрос по возврату"},
                        {"cooperation": "Вопрос по сотрудничеству"}
                    ],
                    "value": "cooperation"
                },
                {
                    "attrs": {
                        "required": true,
                        "placeholder": "Ваше сообщение нам"
                    },
                    "label": "Сообщение",
                    "name": "message",
                    "type": "textarea",
                    "value": "Подскажите, как я могу сделать у Вас заказ?"
                }
            ]
        })
    })
}