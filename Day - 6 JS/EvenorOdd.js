function oddishOrEvenish(n) {
  
    var sum = 0;
    
    (n.toString().split('')).forEach(function(i){
        sum += (i - '0');
    })
    
    return ((sum % 2) == 0) ? ("Evenish") : ("Oddish");
}

console.log(oddishOrEvenish(43));

console.log(oddishOrEvenish(373));

console.log(oddishOrEvenish(4433));