import { FormlyFieldConfig } from "@ngx-formly/core";

export interface modelPerfil {
    id: string;
    primerNombre:string;
    segundoNombre:string;
    apellidoPaterno:string;
    apellidoMaterno:string;
    correo:string;
    telefono:string;
    fechaNacimiento: string;
    rfc: string;
    curp: string;
    genero: string;
    password?:string;
    repeatPassword?:string;

}
export class perfilFormFields {
    public static model: modelPerfil;
    public static GetFields():Array<FormlyFieldConfig>{
        
    return [
        {
            fieldGroupClassName: 'row',
            fieldGroup: [{
                className: 'col-6',
                key: 'primerNombre',
                type: 'input',
                templateOptions: {
                    label: 'Primer nombre',
                    placeholder: 'Primer nombre',
                }
            },
            {
            className: 'col-6',
            key: 'segundoNombre',
            type: 'input',
            templateOptions: {
                label: 'Segundo nombre',
                placeholder: 'Segundo nombre',
                }
            }],
        },
        {
            fieldGroupClassName: 'row',
            fieldGroup: [{
                className: 'col-6', 
                key: 'apellidoPaterno',
                type: 'input',
                templateOptions: {
                    label: 'Apellido paterno',
                    placeholder: 'Apellido paterno',
                    }
                },
            {
                className: 'col-6',
                key: 'apellidoMaterno',
                type: 'input',
                templateOptions: {
                    label: 'Apellido materno',
                    placeholder: 'Apellido materno',
                    }
            }],
        },
        {
            fieldGroupClassName: 'row',
            fieldGroup: [{
                className: 'col-6', 
                key: 'email',
                type: 'input',
                templateOptions: {
                    label: 'Email address',
                    placeholder: 'Email',
                }
            },
            {
                className: 'col-6', 
                key: 'telefono',
                type: 'input',
                templateOptions: {
                    label: 'Telefono',
                    placeholder: 'Telefono',
                }
            }],
        },
        {
            fieldGroupClassName: 'row',
            fieldGroup: [{
                className: 'col-6', 
                key: 'fechaNacimiento',
                type: 'input',
                templateOptions: {
                    label: 'Fecha nacimiento',
                    placeholder: 'Fecha nacimiento',
                }
            },
            {
                className: 'col-6', 
                key: 'rfc',
                type: 'input',
                templateOptions: {
                    label: 'RFC',
                    placeholder: 'RFC',
                }
            }],
        },
        {
            fieldGroupClassName: 'row',
            fieldGroup: [{
                className: 'col-6', 
                key: 'curp',
                type: 'input',
                templateOptions: {
                    label: 'CURP',
                    placeholder: 'CURP',
                }
            },
            {
                className: 'col-6', 
                key: 'genero',
                type: 'input',
                templateOptions: {
                    label: 'Genero',
                    placeholder: 'Genero',
                }
            }],
        },
        {
            fieldGroupClassName: 'row',
            fieldGroup: [{
                className: 'col-6', 
                key: 'Password',
                type: 'input',
                templateOptions: {
                placeholder: 'Contraseña',
                type: 'password',
                required: true,
                minLength: 8
                },
                validators: {
                Password: {
                    expression: (control: { value: string; }) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}$/.test(control.value),
                    message: 'Al menos 8 dígitos usando mayúsculas, minúsculas y números',
                    }
                },
            },
            {
                className: 'col-6', 
                key: 'RepeatPassword',
                type: 'input',
                templateOptions: {
                placeholder: 'Repita la contraseña',
                type: 'password',
                required: true
                },
                validators: {
                fieldMatch: {
                    expression: (control: { value: any; }) => {
                    return control.value == this.model.password;
                    },
                    message: 'Las contraseñas no coinciden',
                    }
                }
            }]
        }
        ];
    }
    
}
