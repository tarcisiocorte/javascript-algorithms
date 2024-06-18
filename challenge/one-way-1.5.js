/** 
1.5
One Away: There are three types of edits that can be performed on strings: insert a character,
remove a character, or replace a character. Given two strings, write a function to check if they are
one edit (or zero edits) away.
EXAMPLE
pale, ple -> true
pales, pale -> true
pale, bale -> true
pale, bake -> false 
*/

class OneAway {
  oneEditAwayOptimized(first, second) {
    // 1. Verificação Precoce da Diferença de Tamanho:
    // Calcula a diferença absoluta dos comprimentos das strings.
    if (Math.abs(first.length - second.length) > 1) {
      // Se a diferença for maior que 1, retorna `false` imediatamente, pois não é possível
      // que as strings sejam uma edição de distância nesse caso.
      return false;
    }

    // 2. Determinação das Strings "Mais Curta" (`s1`) e "Mais Longa" (`s2`):
    // Usa um operador ternário para atribuir a `s1` a string mais curta e a `s2` a string mais longa.
    const longest = first.length < second.length ? second : first;
    const smallest = first.length < second.length ? first : second;

    // 3. Inicialização de Variáveis:
    let longestIndex = 0; // Índice para percorrer a string mais curta (`longest`)
    let smalllestIndex = 0; // Índice para percorrer a string mais longa (`smallest`)
    let foundDifference = false; // Sinalizador para indicar se já foi encontrada uma diferença

    // 4. Loop de Comparação:
    // Continua enquanto houver caracteres em ambas as strings.
    while (smalllestIndex < smallest.length && longestIndex < longest.length) {
      // Compara os caracteres nas posições atuais de `longest` e `smallest`.
      if (longest.charAt(longestIndex) !== smallest.charAt(smalllestIndex)) {
        // Se os caracteres forem diferentes:
        if (foundDifference) {
          // Se já foi encontrada uma diferença, retorna `false`, pois não pode haver mais de uma edição.
          return false;
        }
        foundDifference = true; // Marca que uma diferença foi encontrada.

        // Se as strings tiverem o mesmo comprimento, incrementa `longestIndex` para compensar a substituição.
        if (longest.length === smallest.length) {
          longestIndex++;
        }
      } else {
        // Se os caracteres forem iguais, incrementa `longestIndex`.
        longestIndex++;
      }
      // Sempre incrementa `smallestIndex`, pois a string `s2` é a mais longa e precisa ser totalmente percorrida.
      smalllestIndex++;
    }

    // 5. Retorno Final:
    // Se o loop terminar sem encontrar mais de uma diferença, as strings estão a uma edição de distância.
    return true;
  }
}

module.exports = OneAway;
