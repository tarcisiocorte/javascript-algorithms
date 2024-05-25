function longestSubstringWithoutRepeatingCharacters(s) {
    const n = s.length; // Obtém o comprimento da string
    let maxLength = 0; // Inicializa a variável para armazenar o comprimento máximo da substring
    const charIndexMap = {}; // Cria um objeto para mapear a última posição de cada caractere
    let start = 0; // Inicializa a posição inicial da janela deslizante

    // Loop através de cada caractere na string
    for (let end = 0; end < n; end++) {
        const char = s[end]; // Obtém o caractere atual
        // Se o caractere já estiver no mapa e a posição for maior ou igual ao início
        if (charIndexMap[char] !== undefined) {
            // Atualiza a posição inicial da janela deslizante
            start = Math.max(charIndexMap[char] + 1, start);
        }
        // Atualiza a posição do caractere atual no mapa
        charIndexMap[char] = end;
        // Calcula o comprimento da substring atual e atualiza maxLength se necessário
        maxLength = Math.max(maxLength, end - start + 1);
    }

    // Retorna o comprimento da substring mais longa sem caracteres repetidos
    return maxLength;
}

// Exemplo de uso
const input = "abcabcbb"; // Define a string de entrada
const output = longestSubstringWithoutRepeatingCharacters(input); // Chama a função e armazena o resultado
console.log(output); // Imprime o resultado no console, que deve ser 3
