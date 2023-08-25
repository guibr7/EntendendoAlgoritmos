/*Encontre o valor mais alto em uma lista utilizando recursão*/
let x=0
function acharValorAlto(lista){
   
    if(lista.length == 0 ){
        return x
    }
    else if(lista[0]<lista[1]){
        return acharValorAlto(lista.slice(1))
    } else  if(lista[0] > x) {
        x = lista[0]
        return acharValorAlto(lista.slice(1))
    } else{
        return acharValorAlto(lista.slice(1))
    }
}
let lista = [2,4,15,3,8,22,5,204,1064,64,2023]
acharValorAlto(lista)