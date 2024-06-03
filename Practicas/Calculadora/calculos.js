function calcular(){
    var val1= parseFloat(document.getElementById("v1").value)
    var val2= parseFloat(document.getElementById("v2").value)
    var x=0
    var res=document.getElementById("res")

    if(isNaN(val1) || isNaN(val2)){
        res.innerHTML="Datos nulos o incorrectos"
        if(isNaN(val1)){
            document.getElementById("v1").focus()
        }else{
            document.getElementById("v2").focus()
        }
        return
    }

    x=val1+val2

    res.innerHTML=x
}