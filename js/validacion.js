const formulario = document.getElementById('formulario')

const nombre = document.getElementById('nombre')
const email = document.getElementById('email')
const contrasenia = document.getElementById('contrasenia')
const edad = document.getElementById('edad')
const fecha = document.getElementById('fechaDisponibilidad')
const condicion = document.getElementById('condicionFisica')
const expediente = document.getElementById('expedienteMedico')
const comentarios = document.getElementById('comentarios')





nombre.addEventListener("input", (e) => {
    const patron = /^[A-Za-z]{3,}$/;
    if (!patron.test(e.target.value)) {
        nombre.setCustomValidity("Se espera un nombre al menos 3 letras")
    } else {
        nombre.setCustomValidity("");
    }

})

email.addEventListener("input", (e) => {
    const patron = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!patron.test(e.target.value)) {
        email.setCustomValidity("Se espera un email valido")
    } else {
        email.setCustomValidity("");
    }

})

contrasenia.addEventListener("input", (e) => {
    const patron = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!patron.test(e.target.value)) {
        contrasenia.setCustomValidity("Tu contraseña debe contener almenos una mayuscula, una minuscula, un numero, un caracter especial valido y tener al menos 8 caracteres");
    } else {
        contrasenia.setCustomValidity("");
    }

})

edad.addEventListener("input", (e) => {
    if (e.target.value < 25 || e.target.value > 50) {
        edad.setCustomValidity("La edad debe estar entre 25 y 50");
    } else {
        edad.setCustomValidity("");
    }

})

fecha.addEventListener("input", (e) => {
    const hoy = new Date().toISOString().split("T")[0]; // formato YYYY-MM-DD
    if (e.target.value < hoy) {
        fecha.setCustomValidity("La fecha no puede ser anterior a la actual");
    } else {
        fecha.setCustomValidity("");
    }
})

condicion.addEventListener("input", (e) => {
    if (e.target.value < 7) {
        condicion.setCustomValidity("La condicion fisica debe ser mayor o igual a 7");
    } else {
        condicion.setCustomValidity("");
    }

});

expediente.addEventListener("input", (e) => {
   
    const archivo = e.target.files[0];
    const extension = archivo.name.split('.').pop();

    if (extension === "pdf") {
        expediente.setCustomValidity("");

    } else {
        expediente.setCustomValidity("Solo se permiten archivos pdf");
    }

})

comentarios.addEventListener("input", (e) => {
    if (e.target.value.length < 10) {
        comentarios.setCustomValidity("Los comentarios deben tener al menos 10 caracteres");
    } else {
        comentarios.setCustomValidity("");
    }

})


const validarCondicion = (e) => {
    let resultado = false
    let condicion = document.getElementById("condicionFisica").value

    if (condicion >= 7) resultado = true

    return resultado
}

