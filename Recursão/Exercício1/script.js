/*Escreva o código para a função soma, vista anteriormente*/

/*Retornar o valor total com Loop*/
/*
function soma(lista){
   let total = 0
    for(let i = 0; i <= lista.length-1 ; i++ ){      
        total+=lista[i]
    }
    return console.log(total)
}*/

function soma(lista){
    if(lista.length === 0){
        return 0 
    } else {
        return lista[0]+soma(lista.slice(1))
    }
}

let lista = [7,7,2]
soma(lista)

