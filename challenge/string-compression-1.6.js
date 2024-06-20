class StringCompressor {
  // Método inicial sem otimizações, conhecido como compressBad
  compressBad(str) {
      let compressedString = ""; // Armazena a string comprimida
      let countConsecutive = 0; // Conta os caracteres consecutivos

      // Percorre cada caractere da string
      for (let i = 0; i < str.length; i++) {
          countConsecutive++; // Incrementa a contagem de caracteres consecutivos
          
          // Se o próximo caractere é diferente do atual ou se estamos no último caractere
          if (i + 1 >= str.length || str[i] !== str[i + 1]) {
              // Concatena o caractere e sua contagem na string comprimida
              compressedString += str[i] + countConsecutive;
              countConsecutive = 0; // Reseta a contagem de caracteres consecutivos
          }
      }

      // Retorna a string comprimida se for menor que a original; caso contrário, retorna a original
      return compressedString.length < str.length ? compressedString : str;
  }

  // Método otimizado que calcula o comprimento antes de comprimir a string
  compressString(str) {
      // Função para calcular o comprimento da string comprimida sem construí-la
      function countCompression(str) {
          let compressedLength = 0; // Armazena o comprimento da string comprimida
          let countConsecutive = 0; // Conta os caracteres consecutivos

          // Percorre cada caractere da string
          for (let i = 0; i < str.length; i++) {
              countConsecutive++; // Incrementa a contagem de caracteres consecutivos
              
              // Se o próximo caractere é diferente do atual ou se estamos no último caractere
              if (i + 1 >= str.length || str[i] !== str[i + 1]) {
                  // Adiciona o comprimento do caractere e do número consecutivo à string comprimida
                  compressedLength += 1 + countConsecutive.toString().length;
                  countConsecutive = 0; // Reseta a contagem de caracteres consecutivos
              }
          }
          return compressedLength; // Retorna o comprimento calculado da string comprimida
      }

      // Calcula o comprimento final da string comprimida
      let finalLength = countCompression(str);

      // Se o comprimento da string comprimida não é menor que o original, retorna a string original
      if (finalLength >= str.length) return str;

      let compressed = []; // Array para construir a string comprimida
      let countConsecutive = 0; // Conta os caracteres consecutivos

      // Percorre cada caractere da string novamente para construir a string comprimida
      for (let i = 0; i < str.length; i++) {
          countConsecutive++; // Incrementa a contagem de caracteres consecutivos

          // Se o próximo caractere é diferente do atual ou se estamos no último caractere
          if (i + 1 >= str.length || str[i] !== str[i + 1]) {
              // Adiciona o caractere atual ao array comprimido
              compressed.push(str[i]);
              // Adiciona a contagem de caracteres consecutivos ao array comprimido
              compressed.push(countConsecutive);
              countConsecutive = 0; // Reseta a contagem de caracteres consecutivos
          }
      }

      // Converte o array comprimido em uma string e retorna
      return compressed.join('');
  }
}

module.exports = StringCompressor; // Exporta a classe StringCompressor