function validaPass(){
    var p1=document.getElementById("pass").value
    var p2=document.getElementById("pass2").value
    if(p1!=p2){
        alert("Confirma correctamente tu password")
        return
    }
}
