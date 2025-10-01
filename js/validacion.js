const formulario = document.getElementById('formulario')

const validarFecha = (e)=>{
  
    let resultado = false
    let fecha = document.getElementById("fechaDisponibilidad")
    const hoy = new Date().toISOString().split("T")[0]; // formato YYYY-MM-DD
    fecha.min= hoy;
    if(fecha.value > hoy){
        document.getElementById("fechaDisponibilidad");
        resultado = true
    }
    
    return resultado
}

const validarCondicion = (e)=>{
    let resultado = false
    let condicion = document.getElementById("condicionFisica").value

    if(condicion>=7) resultado=true

    return resultado
}


formulario.addEventListener('submit', (e)=>{
    
    if(!validarFecha()){
        e.preventDefault()
        alert("Error, la fecha no cumple los requisitos")
    }
    else if(!validarCondicion()){
        e.preventDefault()
        alert("Error, la condicion fisica no cumple los requisitos")
    
    }
    
})