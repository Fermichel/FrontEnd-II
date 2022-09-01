const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}
const campos = {
	usuario: false,
	nombre: false,
	password: false,
	correo: false,
	telefono: false
}
// const baseDatos={
//     usuario: "",
// 	nombre: "",
// 	password: "",
// 	correo: "",
// 	telefono: ""
// }

function validarFormulario(e){
    switch (e.target.name){
        case 'usuario':
            validarCampos(expresiones.usuario,e.target,'usuario');
        break;
        case 'nombre':
            validarCampos(expresiones.nombre,e.target,'nombre');
        break;
        case 'password':
            validarCampos(expresiones.password,e.target,'password');
            validarPassword2()
        break;
        case 'password2':
            validarPassword2()
        break;
        case 'correo':
            validarCampos(expresiones.correo,e.target,'correo');
        break;
        case 'telefono':
            validarCampos(expresiones.telefono,e.target,'telefono');
        break;
    }
}

function validarCampos(expresion, input, campo){
    if(expresion.test(input.value)){
        document.querySelector(`#grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.querySelector(`#grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo]=true;
    }else{
        document.querySelector(`#grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.querySelector(`#grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo]=false;
    }
}

function validarPassword2(){
    const inputPassword1= document.querySelector('#password');
    const inputPassword2= document.querySelector('#password2');
    if (inputPassword1.value == inputPassword2.value){
        document.querySelector('#grupo__password2').classList.remove('formulario__grupo-incorrecto');
        document.querySelector('#grupo__password2').classList.add('formulario__grupo-correcto');
        document.querySelector('#grupo__password2 i').classList.remove('fa-times-circle');
        document.querySelector('#grupo__password2 i').classList.add('fa-check-circle');
        document.querySelector('#grupo__password2 .formulario__input-error').classList.remove('formulario__input-error-activo');
        campos[password]=true;
    }else{
        document.querySelector('#grupo__password2').classList.add('formulario__grupo-incorrecto');
        document.querySelector('#grupo__password2').classList.remove('formulario__grupo-correcto');
        document.querySelector('#grupo__password2 i').classList.add('fa-times-circle');
        document.querySelector('#grupo__password2 i').classList.remove('fa-check-circle');
        document.querySelector('#grupo__password2 .formulario__input-error').classList.add('formulario__input-error-activo');
        campos[password]=false;
    }
}

inputs.forEach((input) =>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);

})

formulario.addEventListener('submit', function (e){
    e.preventDefault(); 
    const terminos= document.querySelector('#terminos');
    if(campos.usuario && campos.nombre && campos.password && campos.telefono && terminos.checked){
        formulario.reset();

        document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');

        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-active');
        setTimeout(()=>{
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-active');
        }, 4000);

        document.querySelectorAll('.formulario__grupo-correcto').forEach((i)=>{
            i.classList.remove('formulario__grupo-correcto');
        });

    }else{
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }
});