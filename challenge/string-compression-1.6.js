class StringCompression {
  compressWithFullIteraction(str) {
    let compressed = "";
    let countConsecutive = 0;
    for (let i = 0; i < str.length; i++) {
      countConsecutive++;
      if (i + 1 >= str.length || str.charAt(i) !== str.charAt(i + 1)) {
        compressed += "" + str.charAt(i) + countConsecutive;
        countConsecutive = 0;
      }
    }
    return compressed.length > str.length ? str : compressed;
  }
}
