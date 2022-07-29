module.exports = function towelSort (matrix) {
  let result = [];

    if (matrix) {  
      for (let i = 0; i < matrix.length; i++) {
        if (i % 2 !== 0) {
          matrix[i].sort((a, b) => b - a);
        }
        result = result.concat(matrix[i]);
      }
    }
  return result;
}