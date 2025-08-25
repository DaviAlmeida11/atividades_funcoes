'user strct'


function calcularMedia(){
    let v1 = Number(document.getElementById('n1').value)
    let v2 = Number(document.getElementById('n2').value)
    let v3 = Number(document.getElementById('n3').value)
    let media = (v1 + v2 + v3) /3
    document.getElementById('media').innerHTML = media.toFixed(2)
   
   
    }