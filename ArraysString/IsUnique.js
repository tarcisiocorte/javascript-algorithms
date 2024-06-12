function isUniqueCharsNoDataStructure(str) {
  if (str.length > 128) {
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}

// assumindo que é de a - z
function isUniqueCharsBitVector(str){
    // inicializa o checker
    let checker = 0;
    // itera sobre cada caractere da string
    for(let i = 0; i < str.length; i++){
        // Calcula o valor do caractere atual
        let val = str.charCodeAt(i) - 'a'.charCodeAt(0);
        // Verifica se o caractere já foi encontrado
        if((checker & (1 << val)) > 0){
            // Se sim, retorna falso
            return false;
        }
        //seta o bit correspondente ao caractere no vetor de bits
        checker |= (1 << val);
    }
    // retorna true se não houver caracteres repetidos
    return true;
}