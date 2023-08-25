/*Escreva o código para a função soma, vista anteriormente*/

/*Retornar o valor total com Loop*/
function soma(lista){
   let total = 0
    for(let i = 0; i <= lista.length-1 ; i++ ){      
        total+=lista[i]
    }
    return console.log(total)
}
let array = [7,7,2]
soma(array)

