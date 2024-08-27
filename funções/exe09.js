

function maiorNumero(n1=0,n2=0,n3=0){
    if(n1 >= n2 && n1 >= n3){
        return n1
    } else if (n2 >= n1 && n2 >= n3){
        return n2
    } else {
        return  n3
    }
}

console.log(maiorNumero(7,7,4))