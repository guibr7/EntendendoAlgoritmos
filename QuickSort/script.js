function qsort(lista){
    let menor = []
    let maior = []
    
    console.log(lista)
    let UltimoIndex = lista.length-1
    let media = Math.floor((UltimoIndex/2))
    let pivo = lista[media]

    // Array vazio [] não concatena
    if(lista.length < 2){
        return lista
    }

    for(i = 0; i <= UltimoIndex; i++){
       if(lista[i] < pivo){
        menor.push(lista[i])
       } else if(lista[i] > pivo){
        maior.push(lista[i])
       }
    }
    /* Concatenação com Spread */
    return[...qsort(menor),pivo,...qsort(maior)]
}

let lista = [98,20,300,40,4,18,12,10,33,82]
console.log(qsort(lista))