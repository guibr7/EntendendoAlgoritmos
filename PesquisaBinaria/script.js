
function pesquisa_binaria(array,item){
    baixo = 0
    alto = array.length-1
    while(baixo <= alto){
        metade = Math.floor((baixo+alto)/2) // metade = índice do chute 
        chute = array[metade]
        if( item > chute){
            baixo = metade+1
        } else if( item<chute){
            alto = metade-1
        } else { 
            return console.log(metade)
        }
    } return -1
}

const lista = [2,4,5,7,18,23,25,28,32,44,50,60,65,103]
pesquisa_binaria(lista,18)

