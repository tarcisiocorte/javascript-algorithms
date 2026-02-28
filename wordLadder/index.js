/**** 
127. Word Ladder
Hard
Topics
premium lock icon
Companies
A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

Every adjacent pair of words differs by a single letter.
Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
sk == endWord
Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

 

Example 1:

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5
Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.
Example 2:

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
Output: 0
Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.
*/

/**
 * Encontra o comprimento (número de palavras) da menor sequência de transformação
 * de `beginWord` até `endWord`, onde cada passo muda apenas uma letra e
 * cada palavra intermediária deve existir em `wordList`.
 *
 * Estratégia: busca em largura (BFS) sobre o grafo implícito onde cada
 * palavra é um nó e existe uma aresta entre duas palavras se elas
 * diferem por exatamente uma letra. BFS garante que a primeira vez que
 * alcançamos `endWord` será pelo caminho mais curto (menor número de passos).
 *
 * Contrato (entrada/saída):
 * - beginWord: string (palavra inicial)
 * - endWord: string (palavra alvo)
 * - wordList: array de strings (dicionário / nós possíveis)
 * Retorna: number -> tamanho da menor sequência (contando beginWord e endWord)
 *                   ou 0 se não existir transformação possível.
 *
 * Complexidade esperada (pior caso):
 * - Tempo: O(N * L * 26) na abordagem básica (N = |wordList|, L = comprimento das palavras),
 *   porque para cada palavra podemos comparar caractere a caractere com as N palavras
 *   (a checagem isOneLetterDifferent é O(L)). Há otimizações possíveis (padrões com '*')
 *   que reduzem custo, mas aqui usamos a versão simples.
 * - Espaço: O(N) para a fila e conjunto de visitados.
 */
var ladderLength = function (beginWord, endWord, wordList) {
    const indexEndWord = wordList.indexOf(endWord);
    if (indexEndWord < 0) return 0;

    if (beginWord === endWord) return 1;

    const visited = new Set();
    visited.add(beginWord);

    const queue = [[beginWord, 1]];

    while (queue.length > 0) {
        const [currentWord, level] = queue.shift();

        for (let i = 0; i < wordList.length; i++) {
            const candidate = wordList[i];
            if (isOneLetterDifferent(currentWord, candidate) && !visited.has(candidate)) {
                if (candidate === endWord) {
                    return level + 1;
                }
                visited.add(candidate);
                queue.push([candidate, level + 1]);
            }
        }
    }

    return 0;
};

var isOneLetterDifferent = function (word1, word2) {
    if (word1.length !== word2.length) return false;

    let diffCount = 0;
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i]) {
            diffCount++;
        }
        if (diffCount > 1) return false;
    }
    return diffCount === 1;
};

module.exports = ladderLength;