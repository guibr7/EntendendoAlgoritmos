/*Escreva uma função recursiva que conte o número de itens em uma lista*/
 function contarItens(lista){
    if(lista.length === 0){
        return 0
    } else {
        return 1+contarItens(lista.slice(1))
    }
 }

let lista = [1,2,7,8,12,6,20,4]
contarItens(lista)