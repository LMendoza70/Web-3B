var edad=0
let x=0
const y=0

function saludo(){
    if(edad<18){
        alert("Eres menor de edad...")
    }else{
        alert("Eres mayor de edad....")
    }
}

function capturaEdad(){
    edad=prompt("Ingresa tu edad...")
    console.log("El usuario capturo un "+edad)
}

const saludo2=()=>{
    if(edad<18){
        alert("Eres menor de edad... desde la flecha");
    }else{
        alert("Eres mayor de edad.... desde la flecha")
    }
}