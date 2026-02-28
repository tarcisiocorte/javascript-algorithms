# Word Ladder (127)

Descrição do problema:

Uma sequência de transformação de `beginWord` para `endWord` usando um dicionário `wordList`
é uma sequência beginWord -> s1 -> s2 -> ... -> sk tal que:

- Cada par adjacente de palavras difere por uma única letra.
- Cada si para 1 <= i <= k está em `wordList`. (beginWord não precisa estar em wordList)
- sk == endWord

Dado `beginWord`, `endWord` e `wordList`, retornar o número de palavras na menor sequência
de transformação de `beginWord` para `endWord`, ou 0 se não existir tal sequência.

Exemplos:

- Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
  Output: 5
  Explicação: "hit" -> "hot" -> "dot" -> "dog" -> "cog" (5 palavras)

- Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
  Output: 0
  Explicação: endWord não está em wordList, logo não há transformação válida.

---

Resumo da solução (implementação no `index.js`):

- Utilizamos Busca em Largura (BFS) sobre o grafo implícito onde cada palavra é um nó.
- Há uma aresta entre duas palavras se elas diferem por exatamente uma letra.
- BFS garante que a primeira vez que alcançarmos `endWord` seja pelo caminho mais curto.

Contrato da função `ladderLength(beginWord, endWord, wordList)`:

- Inputs:
  - `beginWord`: string
  - `endWord`: string
  - `wordList`: array de strings
- Output: número (tamanho da menor sequência, contando beginWord e endWord) ou 0 se não há caminho.

Casos de borda e convenções adotadas:

- Se `endWord` não estiver presente em `wordList`, a função retorna 0.
- Se `beginWord` === `endWord`, a função retorna 1 (sequência contendo apenas a palavra inicial).
- Palavras de tamanhos diferentes são consideradas incompatíveis (não há aresta entre palavras de tamanhos diferentes).

Complexidade (versão básica):

- Tempo: O(N * L * 26) na forma ingênua, ou O(N * L^2) dependendo da implementação da comparação,
  onde N = |wordList| e L = comprimento das palavras. Existem otimizações com padrões intermediários
  (por exemplo gerar chaves com '*') que podem reduzir o custo.
- Espaço: O(N) para fila + visited.

Testes (no arquivo `index.test.js`):

O arquivo de teste contém um único teste com várias asserções cobrindo:
- Exemplos do enunciado
- beginWord === endWord
- transformação direta (palavras de 1 letra)
- palavras de comprimentos diferentes
- listas com palavras repetidas
- caminhos alternativos possíveis

---

Observações:

O código fornecido é a versão simples e didática focada em clareza. Se desejar,
posso refatorar para a versão otimizada (pré-processamento de padrões com '*')
para melhorar a eficiência em instâncias grandes.
