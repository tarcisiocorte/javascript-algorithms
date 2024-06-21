class RotateMatrix {
  rotate(matrix) {
    // checar se a matrix não esta vazia ou se é uma matrix quadrada
    if (matrix.length === 0 || matrix.length !== matrix[0].length) return false;

    let n = matrix.length;

    for (let layer = 0; layer < n / 2; layer++) {
      let first = layer;
      let last = n - 1 - layer;

      for (let i = first; i < last; i++) {
        let offset = i - first;
        let top = matrix[first][i]; // Salva o elemento do topo
        // elemento esquerdo -> topo
        matrix[first][i] = matrix[last - offset][first];
        // elemento inferior -> esquerda
        matrix[last - offset][first] = matrix[last][last - offset];
        // elemento direito -> inferior
        matrix[last][last - offset] = matrix[i][last];
        // elemento topo -> direita
        matrix[i][last] = top; // Elemento do topo -> direita
      }
    }
    return true;
  }
}

module.exports = RotateMatrix;
